<template>
  <form @submit.prevent="onSubmit">
    <div class="md-layout">
      <div
        class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-70 md-small-size-100"
      >
        <md-card>
          <md-card-header class="md-card-header-text md-card-header-green">
            <div class="card-text">
              <h4 class="title">Create Company</h4>
            </div>
          </md-card-header>

          <md-card-content>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Name</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Company name</label>
                  <md-input v-model="name" placeholder="Name of company"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Payment frequency</label>
              <div class="md-layout-item md-inline-checkboxes" style="padding-top: 20px;">
                <md-radio v-model="paymentFrequency" :value="true">Monthly</md-radio>
                <md-radio v-model="paymentFrequency" :value="false">Individual</md-radio>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Code</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Company code</label>
                  <md-input v-model="code" placeholder="Code of company"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Invoice Number</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Company invoice number</label>
                  <md-input v-model="invoiceNumber" placeholder="Invoice Number of company"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">KST</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Company KST</label>
                  <md-input v-model="kst" placeholder="KST of company"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Address</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Company Address</label>
                  <md-input v-model="address" placeholder="Address of company"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Name</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Head secretary name</label>
                  <md-input v-model="headSecretary.full_name" placeholder="Name of head secretary"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Email</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Head secretary email</label>
                  <md-input v-model="headSecretary.user.email" placeholder="Email of head secretary"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Password</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Head secretary password</label>
                  <md-input v-model="headSecretary.user.password" placeholder="Password of head secretary"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout" style="margin-top:50px;">
              <div class="md-layout-item mx-auto md-size-30">
                <md-button class="md-warning" type="submit">Add Company</md-button>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </form>
</template>
<script>
import { CREATE_COMPANY } from "@/store/actions.type";

export default {
  name: "CreateCompany",
  components: {},
  props: {
    regularImg: {
      type: String,
      default: "./img/image_placeholder.jpg"
    },
    avatarImg: {
      type: String,
      default: "./img/placeholder.jpg"
    }
  },
  data() {
    return {
      name: "",
      paymentFrequency: "",
      code: "",
      invoiceNumber: "",
      kst: "",
      address: "",
      headSecretary: {
        full_name: "",
        user: {
          email: "",
          password: ""
        }
      }
    };
  },
  methods: {
    async onSubmit() {
      let company = {
        name: this.name,
        payment_frequency: "",
        code: this.code,
        invoice_number: this.invoiceNumber,
        kst: this.kst,
        address: this.address,
        head_secretary: this.headSecretary
      };
      if (this.paymentFrequency == true) {
        company.payment_frequency = "monthly";
      } else {
        company.payment_frequency = "individual";
      }
      console.log("value of radio: ", company);
      await this.$store.dispatch(CREATE_COMPANY, company);
      this.$router.push({ name: "Companies" });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if (e.target.name) {
        this.createImage(files[0], "circle");
      } else {
        this.createImage(files[0]);
      }
    },
    createImage(file, type) {
      let reader = new FileReader();
      let vm = this;

      reader.onload = e => {
        if (type === "circle") {
          vm.imageCircle = e.target.result;
        } else {
          vm.imageRegular = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(type) {
      if (type === "circle") {
        this.imageCircle = "";
      } else {
        this.imageRegular = "";
      }
    },
    onResponsiveInverted() {
      if (window.innerWidth < 768) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>
<style lang="scss" scoped>
.md-card .md-card-actions {
  border: none;
}

.md-inline-checkboxes {
  display: inline-flex;

  .md-checkbox {
    margin-top: 15px !important;
  }
}

.md-checkbox,
.md-radio {
  margin-top: 15px;
  margin-bottom: 0.5rem;
}

.md-checkbox,
.md-radio {
  display: flex;
}

.md-radio /deep/ .md-radio-container {
  margin-left: 5px;
  position: relative;
  left: -3px;
}

.md-form-label + .md-layout-item .md-checkbox:not(:first-child),
.md-form-label + .md-layout-item + .md-layout-item .md-radio:not(:first-child),
.md-form-label + .md-layout-item .md-radio {
  margin-top: 0;
}

.form-control-static {
  margin-top: 6px;
}
</style>

<style>
.md-radio.md-checked .md-radio-container {
  border-color: orange !important;
}

.md-radio.md-checked .md-radio-container:after {
  background-color: orange !important;
}
</style>

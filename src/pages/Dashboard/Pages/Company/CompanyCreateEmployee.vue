<template>
<form @submit.prevent="onSubmit">
  <div class="md-layout">
    <div class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-70 md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-green">
          <div class="card-text">
            <h4 class="title">Add Employee</h4>
          </div>
        </md-card-header>

        <md-card-content>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Email</label>
            <div class="md-layout-item">
              <md-field>
                <label>Employee email</label>
                <md-input v-model="email" placeholder="Email"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Password</label>
            <div class="md-layout-item">
              <md-field>
                <label>Employee password</label>
                <md-input v-model="password" placeholder="Password"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Name</label>
            <div class="md-layout-item">
              <md-field>
                <label>Employee name</label>
                <md-input v-model="name" placeholder="Name and surname"></md-input>
              </md-field>
            </div>
          </div>

        <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Address</label>
            <div class="md-layout-item">
              <md-field>
                <label>Employee address</label>
                <md-input v-model="address" placeholder="Employee home address"></md-input>
              </md-field>
            </div>
          </div>



          <div class="md-layout" style="margin-top:50px;">
              <div class="md-layout-item mx-auto md-size-30">

                <md-button class="md-success" type="submit">Add Employee</md-button>
              </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
  </form>
</template>
<script>
import { CREATE_EMPLOYEE } from "@/store/actions.type";

export default {
  name: "CompanyCreateEmployee",
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
      email: "",
      password: "",
      name: "",
      address: ""
    };
  },
  methods: {
    onSubmit(){
      let employee = {
        email: this.email,
        password: this.password,
        name: this.name,
        address: this.address
      };

      this.$store.dispatch(CREATE_EMPLOYEE, employee).then(() => {
          this.$router.push({ name: "CompanyEmployees" });
      });      
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

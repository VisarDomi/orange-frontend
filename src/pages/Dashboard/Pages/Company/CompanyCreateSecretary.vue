<template>
  <form @submit.prevent="onSubmit">
    <div class="md-layout">
      <div
        class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-70 md-small-size-100"
      >
        <md-card>
          <md-card-header class="md-card-header-text md-card-header-green">
            <div class="card-text">
              <h4 class="title">Add Secretary</h4>
            </div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Name</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Secretary name</label>
                  <md-input v-model="full_name" placeholder="Name of secretary"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Email</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Secretary email</label>
                  <md-input v-model="user.email" placeholder="Email of secretary"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-15 md-form-label">Password</label>
              <div class="md-layout-item">
                <md-field>
                  <label>Secretary password</label>
                  <md-input v-model="user.password" placeholder="Password of secretary"></md-input>
                </md-field>
              </div>
            </div>

            <div class="md-layout" style="margin-top:50px;">
              <div class="md-layout-item mx-auto md-size-30">
                <md-button class="md-warning" type="submit">Add Secretary</md-button>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </form>
</template>
<script>
import { CREATE_SECRETARY } from "@/store/actions.type";
import { getUser } from "@/store/services/userstorage";

export default {
  name: "CompanyCreateSecretary",
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
      full_name: "",
      user: {
        email: "",
        password: ""
      },

    };
  },
  methods: {

    async onSubmit() {
      let secretary = {
        full_name: this.full_name,
        user: this.user,
        role: "normal_secretary"
      };
      let payload = {
        secretary: secretary,
        company_id: getUser().company_id
      };

      await this.$store.dispatch(CREATE_SECRETARY, payload);
      this.$router.push({ name: "CompanySecretaries" });
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

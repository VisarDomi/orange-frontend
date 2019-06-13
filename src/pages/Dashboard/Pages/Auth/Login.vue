<template>
  <div class="md-layout text-center">
    <div class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100">
      <form @submit.prevent="onSubmit">
        <md-card>
          <md-card-header class="md-card-header-icon md-card-header-warning">
            <div class="card-icon">
              <md-icon>contacts</md-icon>
            </div>
            <h4 class="title">{{setRoleName()}} log in</h4>
          </md-card-header>

          <md-card-content>
            <md-field
              :class="[
            { 'md-valid': !errors.has('email') && touched.email },
            { 'md-error': errors.has('email') }
          ]"
            >
              <label>Email Adress</label>
              <md-input
                v-model="email"
                data-vv-name="email"
                type="email"
                required
                v-validate="modelValidations.email"
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('email')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="warning" v-show="!errors.has('email') && touched.email">done</md-icon>
              </slide-y-down-transition>
            </md-field>
            <md-field
              :class="[
            { 'md-error': errors.has('password') },
            { 'md-valid': !errors.has('password') && touched.password }
          ]"
            >
              <label>Password</label>
              <md-input
                v-model="password"
                data-vv-name="password"
                type="password"
                required
                v-validate="modelValidations.password"
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('password')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="warning" v-show="!errors.has('password') && touched.password">done</md-icon>
              </slide-y-down-transition>
            </md-field>
          </md-card-content>

          <!-- @click.native.prevent="validate" -->
          <md-card-actions class="md-alignment-center">
            <md-button native-type="submit" type="submit" class="md-warning">Log in</md-button>
          </md-card-actions>
        </md-card>
      </form>
      <md-card v-if="goBack">
        <md-card-header class="md-card-header-icon md-card-header-warning">
          <div class="card-icon">
            <md-icon>announcement</md-icon>
          </div>
          <h4 class="title">This account is not associated with this role.</h4>
        </md-card-header>
        <md-card-content>
          <md-card-actions class="md-alignment-center">
            <md-button class="md-warning" @click="goBackToRole()">Go Back</md-button>
          </md-card-actions>
        </md-card-content>
      </md-card>
      <md-card v-if="badEmail">
        <md-card-header class="md-card-header-icon md-card-header-warning">
          <div class="card-icon">
            <md-icon>announcement</md-icon>
          </div>
          <h4 class="title">This account does not exist.</h4>
        </md-card-header>
        <md-card-content>
          <md-card-actions class="md-alignment-center">
            <md-button class="md-warning" @click="goBackToRole()">Go Back</md-button>
          </md-card-actions>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { loginReroute } from "@/common/functions";
import { LOGIN } from "@/store/actions.type";
import { SET_GO_BACK, SET_BAD_EMAIL } from "@/store/mutations.type";
import { SlideYDownTransition } from "vue2-transitions";
export default {
  name: "Login",
  components: {
    SlideYDownTransition
  },
  data() {
    return {
      email: null,
      password: null,
      touched: {
        email: false,
        password: false
      },
      modelValidations: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          min: 5
        }
      }
    };
  },
  methods: {
    validate() {
      this.$validator.validateAll().then(isValid => {
        this.$emit("onSubmit", this.registerForm, isValid);
      });

      this.touched.email = true;
      this.touched.password = true;
    },
    setRoleName() {
      let roleName = "";
      console.log("role is", this.role);
      if (this.role == "admin") {
        roleName = "Administrator";
      }
      if (this.role == "company") {
        roleName = "Company";
      }
      if (this.role == "employee") {
        roleName = "Employee";
      }
      if (this.role == "driver") {
        roleName = "Driver";
      }
      return roleName;
    },
    goBackToRole() {
      let payload1 = { goBack: false };
      let payload2 = { badEmail: false };
      this.$store.commit(SET_GO_BACK, payload1);
      this.$store.commit(SET_BAD_EMAIL, payload1);
      this.$router.push({ name: "Role" });
    },
    async onSubmit() {
      let payload = {
        username: this.email,
        password: this.password,
        role: this.role
      };
      console.log("payload are", payload);

      await this.$store.dispatch(LOGIN, payload).then(() => {
        console.log("in then of LOGIN: this.user.role", this.user.role);
        // now reroute to the pages depending on the this.user.role
      });

      loginReroute(this.$router, this.user.role);
    }
  },
  watch: {
    email() {
      this.touched.email = true;
    },
    password() {
      this.touched.password = true;
    }
  },
  computed: {
    ...mapGetters(["role", "user", "goBack", "badEmail"])
  },
  created() {
    console.log("mounted role is ", this.role);
    if (this.role == "") {
      this.$router.push({ name: "Role" });
    }
  }
};
</script>

<style scoped>
.md-card-actions.md-alignment-right {
  justify-content: center;
}
</style>

<style>
.md-field.md-valid label {
  color: #f0ad4e !important;
}

.md-field.md-valid .md-icon {
  color: #f0ad4e !important;
}

.md-field.md-valid:before {
  background-color: orange !important;
}
</style>

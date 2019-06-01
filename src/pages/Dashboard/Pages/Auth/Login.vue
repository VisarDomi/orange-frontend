<template>
  <div class="md-layout text-center">
    <div class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100">
      <form @submit.prevent="onSubmit">
        <md-card>
          <md-card-header class="md-card-header-icon md-card-header-warning">
            <div class="card-icon">
              <md-icon>contacts</md-icon>
            </div>
            <h4 class="title">{{setRole()}} log in</h4>
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
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { LOGIN } from "@/store/actions.type";
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
    setRole() {
      let role = "";
      console.log("role is", this.role);
      if (this.role == "admin") {
        role = "Administrator";
      }
      if (this.role == "company") {
        role = "Company";
      }
      if (this.role == "employee") {
        role = "Employee";
      }
      return role;
    },
    onSubmit() {
      let credentials = {
        username: this.email,
        password: this.password
      };
      console.log("credentials are", credentials);

      this.$store.dispatch(LOGIN, credentials).then(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        console.log("in then of LOGIN: ", user.role);
        // now reroute to the pages depending on the user.role
        if (user.role == "admin") {
          this.$router.push({ name: "Reservations" });
        }
        if (user.role == "company") {
          this.$router.push({ name: "CompanyReservations" });
        }
        if (user.role == "employee") {
          this.$router.push({ name: "CreateDriver" });
        }
      });
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
    ...mapGetters(["role"])
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
</style>

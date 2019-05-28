<template>
  <div class="md-layout text-center">
    <div class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100">
      <form @submit.prevent="onSubmit">
        <login-card header-color="green">
          <h4 slot="title" class="title">{{setRole()}} Log in</h4>
          <!-- <md-button
          slot="buttons"
          href="#facebook"
          class="md-just-icon md-simple md-white"
        >
          <i class="fab fa-facebook-square"></i>
        </md-button>
        <md-button
          slot="buttons"
          href="#twitter"
          class="md-just-icon md-simple md-white"
        >
          <i class="fab fa-twitter"></i>
        </md-button>
        <md-button
          slot="buttons"
          href="#google"
          class="md-just-icon md-simple md-white"
        >
          <i class="fab fa-google-plus-g"></i>
          </md-button>-->
          <!-- <p slot="description" class="description">Or Be Classical</p> -->
          <!-- <md-field class="md-form-group" slot="inputs">
          <md-icon>face</md-icon>
          <label>First Name...</label>
          <md-input v-model="firstname"></md-input>
          </md-field>-->
          <md-field class="md-form-group" slot="inputs">
            <md-icon>username</md-icon>
            <label>Login...</label>
            <md-input v-model="login"></md-input>
          </md-field>
          <md-field class="md-form-group" slot="inputs">
            <md-icon>lock_outline</md-icon>
            <label>Password...</label>
            <md-input v-model="password"></md-input>
          </md-field>
          <md-button slot="footer" class="md-simple md-success md-lg" type="submit">Lets Go</md-button>
        </login-card>
      </form>
    </div>
  </div>
</template>
<script>
import { LoginCard } from "@/components";
import { mapGetters } from "vuex";
import { LOGIN } from "@/store/actions.type";

export default {
  name: "Login",
  components: {
    LoginCard
  },
  data() {
    return {
      firstname: null,
      login: null,
      password: null
    };
  },
  methods: {
    setRole() {
      let role = "";
      console.log("getRole is", this.getRole);
      if (this.getRole == "admin") {
        role = "Administrator";
      }
      if (this.getRole == "company") {
        role = "Company";
      }
      if (this.getRole == "employee") {
        role = "Employee";
      }
      return role;
    },
    onSubmit() {
      let credentials = {
        username: this.login,
        password: this.password
      };
      console.log("credentials are", credentials);

      this.$store.dispatch(LOGIN, credentials).then(()=>{
        let user = JSON.parse(localStorage.getItem("user"))
        console.log("in then of LOGIN: ", user.role)
        // now reroute to the pages depending on the user.role
        if (user.role == "admin") {
          this.$router.push({name: "Reservations"})
        }
        if (user.role == "company") {
          this.$router.push({name: "CompanyReservations"})
        }
        if (user.role == "employee") {
          this.$router.push({name: "CreateDriver"})
        }
      })
    }
  },
  computed: {
    ...mapGetters(["getRole"])
  },
  created() {
    console.log("mounted role is ", this.getRole)
    if (this.getRole == "") {
      this.$router.push({ name: "Role"})
    }
  }
};
</script>

<style></style>

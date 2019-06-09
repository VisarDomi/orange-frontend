<template>
  <div class="">
    <div class="md-layout">
      <div class="md-layout-item md-size-80 mx-auto text-center">
        <h2 class="title">Select your role</h2>
        <h5 class="description">Chose your login below.</h5>
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-small-size-010 md-xsmall-size-100">
        <pricing-card icon-color="icon-warning">
          <h6 slot="category" class="category">Administrator</h6>
          <md-icon slot="icon">home</md-icon>
          <h3 slot="title" class="title">Orange Limo</h3>
          <p
            slot="description"
            class="card-description"
          >Access your dashboard here and manage your orders.</p>
          <md-button slot="footer" class="md-warning md-round" @click="login('admin')">Log-in</md-button>
        </pricing-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">
        <pricing-card icon-color="icon-warning">
          <h6 slot="category" class="category">Manager</h6>
          <md-icon slot="icon">work</md-icon>
          <h3 slot="title" class="title">Client Company</h3>
          <p
            slot="description"
            class="card-description"
          >Make a personal or company limo reservation with Orange.</p>
          <md-button slot="footer" class="md-warning md-round" @click="login('company')">Log-in</md-button>
        </pricing-card>
      </div>
      <!-- <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <pricing-card icon-color="icon-warning">
          <h6 slot="category" class="category">Employee</h6>
          <md-icon slot="icon">supervised_user_circle</md-icon>
          <h3 slot="title" class="title">Personal</h3>
          <p
            slot="description"
            class="card-description"
          >Access your Orange Limo itineraries and upcoming trips.</p>
          <md-button slot="footer" class="md-warning md-round" @click="login('employee')">Log-in</md-button>
        </pricing-card>
      </div>
      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <pricing-card icon-color="icon-warning">
          <h6 slot="category" class="category">Driver</h6>
          <md-icon slot="icon">supervised_user_circle</md-icon>
          <h3 slot="title" class="title">Driver</h3>
          <p
            slot="description"
            class="card-description"
          >Access your Orange Limo itineraries and upcoming trips.</p>
          <md-button slot="footer" class="md-warning md-round" @click="login('driver')">Log-in</md-button>
        </pricing-card>
      </div> -->
    </div>
  </div>
</template>
<script>
import { PricingCard } from "@/components";
import { SET_ROLE } from "@/store/mutations.type";
import { mapGetters } from "vuex";

export default {
  name: "Role",
  components: {
    PricingCard
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["role"])
  },
  methods: {
    login(role) {
      this.getLocation()
      this.$router.push({ name: "Login" });
      this.$store.commit(SET_ROLE, { role: `${role}` });
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.log("Geo Location not supported by browser");
      }
    },
    showPosition(position) {
      let location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      };
      console.log(location);
    }

  }
};
</script>
<style scoped>
.text-center {
  text-align: center;
}
</style>

<style>
.icon-orange {
  color: #ff6600;
}
</style>

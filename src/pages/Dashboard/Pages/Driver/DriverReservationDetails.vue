<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66 mx-auto">
        <form>
          <md-card>
            <md-card-header class="md-card-header-icon md-card-header-green">
              <div class="card-icon">
                <md-icon>card_travel</md-icon>
              </div>
              <h4 class="title">
                Itinerary -
                <small>Details</small>
              </h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout md-layout-item md-small-size-100">
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Pickup Address</label>
                      <md-input v-model="pickup" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Destination</label>
                      <md-input v-model="destination" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Date of pickup</label>
                      <md-input :value="this.date | prettyDate" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Time of pickup</label>
                      <md-input v-model="time" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Company</label>
                      <md-input v-model="company" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Code</label>
                      <md-input v-model="code" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Status</label>
                      <md-input v-model="status" disabled></md-input>
                    </md-field>
                  </div>
                </div>
              </div>

              <div class="md-layout md-gutter" v-if="this.driverReservation.status == 'waiting'">
                <div class="md-layout-item md-size-30 md-small-size-100 mx-auto">
                  <md-button class="md-warning" @click="acceptReservation()">Accept</md-button>
                </div>
                <div class="md-layout-item md-size-30 md-small-size-100">
                  <md-button class="md-danger" @click="rejectReservation()">Reject</md-button>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </form>
      </div>

      <!-- <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card button-color="success"> </user-card>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  GET_DRIVER_RESERVATION,
  UPDATE_DRIVER_RESERVATION
} from "@/store/actions.type";

export default {
  name: "DriverReservationDetail",
  components: {},
  data() {
    return {
      code: "",
      date: "",
      destination: "",
      employees: "",
      pickup: "",
      status: "",
      time: "",
      driverName: "",
      companyName: "",
      employeeNames: "",
      selectedDriver: "",
      company: ""
    };
  },
  methods: {
    acceptReservation() {
      this.$store.dispatch(UPDATE_DRIVER_RESERVATION, {
        reservationId: this.$route.params.id,
        reservationStatus: "accepted"
      });
      this.$router.push({
        name: "DriverAcceptedReservations"
      });
    },
    rejectReservation() {
      this.$store.dispatch(UPDATE_DRIVER_RESERVATION, {
        reservationId: this.$route.params.id,
        reservationStatus: "rejected"
      });
      this.$router.push({
        name: "DriverAcceptedReservations"
      });
    }
  },
  mounted() {
    console.log("route params ", this.$route.params.id);
    this.$store
      .dispatch(GET_DRIVER_RESERVATION, {
        reservationId: this.$route.params.id
      })
      .then(reservation => {
        console.log("getting back from dispatch: ", reservation);
        console.log("getting back from getter", this.driverReservation);
        this.code = this.driverReservation.code;
        this.date = this.driverReservation.date;
        this.destination = this.driverReservation.destination;
        this.pickup = this.driverReservation.pickup;
        if (this.driverReservation.status == "waiting") {
          this.status = "Waiting for response.";
        }
        if (this.driverReservation.status == "accepted") {
          this.status = "You accepted this itinerary.";
        }
        if (this.driverReservation.status == "rejected") {
          this.status = "You rejected this itinerary.";
        }

        this.company = this.driverReservation.company_id;
        this.time = this.driverReservation.time;
      }); //get reservation with store then store it in variable, then get it with mapGetters and plug it into POST invoice
  },
  created() {},
  computed: {
    ...mapGetters(["driverReservation"])
  }

  //need map getter reservationId
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}

.md-field:before {
  background-color: orange !important;
}

// .md-theme-default.md-menu-content.md-menu-content-bottom-start.md-menu-content-small {
//   color: orange !important;
//   background-color: orange !important;
// }
.md-list-item-content.md-ripple:hover {
  background-color: orange !important;
}
</style>

<style scoped>
</style>


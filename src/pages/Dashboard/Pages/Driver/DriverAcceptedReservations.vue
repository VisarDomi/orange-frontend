<template>
  <div>
    <h2>Your current itineraries</h2>

    <div class="md-layout">
      <div
        v-for="reservation in this.incomingReservationsData"
        :key="reservation.id"
        class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100 auto-mx"
      >
        <md-card v-if="reservation.status=='accepted'">
          <!-- <md-card-media md-medium>
          <img class="img" :src="profileCard">
          </md-card-media>-->

          <md-card-header>
            <div class="md-title">{{reservation.destination}}</div>
            <div class="md-subhead">Destination</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button class="md-warning" @click.native="openReservation(reservation)">Details</md-button>
              </div>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>Member of company since 2007.</md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { PricingCard, TestimonialCard } from "@/components";
import { GET_DRIVER_RESERVATIONS } from "@/store/actions.type";

import { mapGetters } from "vuex";
export default {
  name: "DriverAcceptedReservations",
  components: {
    PricingCard,

    TestimonialCard
  },
  props: {
    profileCard: {
      type: String,
      default: "./img/faces/card-profile1-square.jpg"
    }
  },
  data() {
    return {
      incomingReservationsData: []
    };
  },
  methods: {
    openReservation(reservation) {
      console.log("open reservation");

      this.$router.push({
        name: "DriverReservationDetail",
        params: {
          id: reservation.id
        }
      });
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
  created() {
    this.$store.dispatch(GET_DRIVER_RESERVATIONS).then(() => {
      console.log("incomingReservaitons ", this.getDriverReservations);
      this.incomingReservationsData = this.getDriverReservations;
    });
  },
  computed: {
    ...mapGetters(["getDriverReservations"])
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>

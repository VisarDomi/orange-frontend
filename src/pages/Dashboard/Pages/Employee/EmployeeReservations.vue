<template>
  <!-- <div>


    <div class="md-layout">
      <div
        v-for="reservation in this.employeeReservations"
        :key="reservation.id"
        class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100 auto-mx"
      >
        <md-card>


          <md-card-header>
            <div class="md-title">{{reservation.date}}</div>
            <div class="md-subhead">3 days away</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button class="md-warning" @click.native="open_reservation(reservation)">Itinerary Details</md-button>
              </div>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>This trip is in 3 days.</md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </div>
    </div>
  </div> -->
</template>

<script>
// import { PricingCard, TestimonialCard } from "@/components";
// import { GET_EMPLOYEE_RESERVATION, GET_EMPLOYEE_RESERVATION } from "@/store/actions.type";

// import { mapGetters } from "vuex";
// export default {
//   name: "EmployeeReservations",
//   components: {
//     PricingCard,

//     TestimonialCard
//   },
//   props: {
//     profileCard: {
//       type: String,
//       default: "./img/faces/card-profile1-square.jpg"
//     }
//   },
//   data() {
//     return {};
//   },
//   methods: {
//     open_resevation(reservation) {
//       console.log("open_employee")
//       this.$store.dispatch(GET_EMPLOYEE_RESERVATION, { reservationId: reservation.id });
//       this.$router.push({
//         name: "EmployeeReservationDetail",
//         params: {
//           id: reservation.id
//         }
//       });
//     },

//     onResponsiveInverted() {
//       if (window.innerWidth < 768) {
//         this.responsive = true;
//       } else {
//         this.responsive = false;
//       }
//     }
//   },
//   mounted() {
//     this.$store.dispatch(GET_EMPLOYEE_RESERVATIONS)
//     this.onResponsiveInverted();
//     window.addEventListener("resize", this.onResponsiveInverted);
//   },
//   computed: {
//     ...mapGetters(['employeeReservations'])
//   },
//   beforeDestroy() {
//     window.removeEventListener("resize", this.onResponsiveInverted);
//   }
// };
</script>

<style lang="css"></style>

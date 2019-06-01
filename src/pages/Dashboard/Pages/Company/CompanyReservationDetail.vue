<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-40 mx-auto">
        <form>
          <md-card>
            <md-card-header class="md-card-header-icon md-card-header-green">
              <div class="card-icon">
                <md-icon>card_travel</md-icon>
              </div>
              <h4 class="title">
                Reservation -
                <small>Details</small>
              </h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter md-size-100">
                <div class="md-layout md-layout-item md-small-size-100 md-size-100">
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Pickup</label>
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
                      <label>Date</label>
                      <md-input v-model="date" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Time</label>
                      <md-input v-model="time" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Status</label>
                      <md-input v-model="status" disabled></md-input>
                    </md-field>
                  </div>

                  <!-- <div class="md-layout-item md-size-100 text-right">

                  </div>-->
                </div>
              </div>
            </md-card-content>
          </md-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { UserCard } from "@/pages";
import { GET_COMPANY_RESERVATION } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "CompanyReservationDetail",
  components: {
    UserCard
  },
  data() {
    return {
      code: "",
      date: "",
      destination: "",
      employees: "",
      pickup: "",
      status: "",
      time: ""
    };
  },
  methods: {},
  mounted() {},
  created() {
    this.$store
      .dispatch(GET_COMPANY_RESERVATION, {
        reservationId: this.$route.params.id
      })
      .then(() => {
        this.code = this.companyReservation.code;
        this.date = this.companyReservation.date;
        this.destination = this.companyReservation.destination;
        this.employees = this.companyReservation.employees;
        this.pickup = this.companyReservation.pickup;
        this.status = this.companyReservation.status;
        this.time = this.companyReservation.time;
      });
  },
  computed: {
    ...mapGetters(["companyReservation"])
  }
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>

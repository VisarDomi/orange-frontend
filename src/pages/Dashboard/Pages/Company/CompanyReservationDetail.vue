<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <h3>Reservation stops</h3>
        <div class="md-card md-card-timeline md-theme-default md-card-plain">
          <ul class="timeline timeline-simple">
            <li class="timeline-inverted" v-for="stop of companyReservation.stops" >
              <div class="timeline-badge warning">
                <i class="md-icon md-icon-font md-theme-default">person</i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <span class="badge badge-warning">{{stop.employee_full_name}}</span>
                </div>
                <div class="timeline-body">
                  <p>
                    {{stop.pickup}}
                  </p>
                </div>
                <h6>
                  <h6>
                    <i class="ti-time"></i>
                    {{stop.time}}
                  </h6>
                </h6>
              </div>
            </li>

            <li class="timeline-inverted"  >
              <div class="timeline-badge danger">
                <i class="md-icon md-icon-font md-theme-default">directions</i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <span class="badge badge-danger">{{companyReservation.destination}}</span>
                </div>
                <div class="timeline-body">
                  <p>
                  </p>
                </div>
                <h6>
                  <h6>
                    <i class="ti-time"></i>
                  </h6>
                </h6>
              </div>
            </li>


          </ul>
        </div>
      </div>

      <div class="md-layout-item md-medium-size-100 md-size-40 mx-auto">
        <h3>Reservation details</h3>
        <br>
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
                      <label>Date</label>
                      <md-input :value="date |prettyDate" disabled></md-input>
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
                      <label>Payment Method</label>
                      <md-input v-model="companyReservation.payment_method" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Vehicle Type</label>
                      <md-input v-model="companyReservation.vehicle_type" disabled></md-input>
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

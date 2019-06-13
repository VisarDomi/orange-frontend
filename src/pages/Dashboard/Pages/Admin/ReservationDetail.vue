<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-size-100 mx-auto"
        style="margin-bottom: 50px;"
      >
        <md-button class="md-warning" @click="createInvoice()">Create invoice for this reservation</md-button>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-40">
        <h3>Reservation stops</h3>
        <div class="md-card md-card-timeline md-theme-default md-card-plain">
          <ul class="timeline timeline-simple">
            <li class="timeline-inverted" v-for="stop of getAdminReservation.stops">
              <div class="timeline-badge warning">
                <i class="md-icon md-icon-font md-theme-default">person</i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <span class="badge badge-warning">{{stop.employee_full_name}}</span>
                </div>
                <div class="timeline-body">
                  <p>{{stop.pickup}}</p>
                </div>
                <h6>
                  <h6>
                    <i class="ti-time"></i>
                    {{stop.time}}
                  </h6>
                </h6>
              </div>
            </li>

            <li class="timeline-inverted">
              <div class="timeline-badge danger">
                <i class="md-icon md-icon-font md-theme-default">directions</i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <span class="badge badge-danger">{{getAdminReservation.destination}}</span>
                </div>
                <div class="timeline-body">
                  <p></p>
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

      <div class="md-layout-item md-medium-size-100 md-size-50 mx-auto">
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
              <div class="md-layout md-gutter">
                <div class="md-layout md-layout-item md-small-size-100">
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Destination</label>
                      <md-input v-model="destination" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Date of pickup</label>
                      <md-input :value="this.date " disabled></md-input>
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
                      <md-input v-model="companyName" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Payment Method</label>
                      <md-input v-model="getAdminReservation.payment_method" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Vehicle Type</label>
                      <md-input v-model="getAdminReservation.vehicle_type" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>KSt</label>
                      <md-input v-model="code" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Driver</label>
                      <md-input v-model="driverName" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Status</label>
                      <md-input v-model="status" disabled></md-input>
                    </md-field>
                  </div>
                </div>

                <div class="md-layout-item md-small-size-100 md-size-100">
                  <div class="md-layout">
                    <div class="md-layout-item md-medium-size-50 md-size-40 mx-auto">
                      <md-field>
                        <label class>Driver</label>
                        <md-select v-model="selectedDriver" name="driver" id="driver" md-dense>
                          <md-option
                            v-for="driver in this.getDrivers"
                            :value="driver.id"
                            :key="driver.id"
                          >{{driver.full_name}}</md-option>
                        </md-select>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-medium-size-50 md-size-40 mx-auto">
                      <md-button
                        class="md-warning"
                        @click="assignDrivers()"
                      >Assign driver to this reservation</md-button>
                    </div>
                  </div>
                </div>

                <!-- <div class="md-layout-item md-size-100 text-right">
                </div>-->
                <!-- <div class="md-layout md-layout-item md-small-size-100">
                </div>-->
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
  CREATE_ADMIN_INVOICE,
  GET_ADMIN_RESERVATION,
  UPDATE_ADMIN_RESERVATION,
  GET_DRIVERS,
  GET_DRIVER,
  GET_COMPANY
} from "@/store/actions.type";

export default {
  name: "ReservationDetail",
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

      invoice: {
        ref: "ref2",
        date: "2018-12-31",
        due: "2019-12-31",
        from_business_name: "adsf",
        from_addressline_1: "adsfasd",
        from_addressline_2: "wer",
        from_city: "werf",
        from_postcode: "sdf",
        from_vat: "sdsf",
        from_phone: "sdqwf",
        to_client_name: "sdaflk",
        to_addressline_1: "werjo",
        to_addressline_2: "wer",
        to_city: "werg",
        to_postcode: "edfg",
        to_vat: "sdwef",
        to_phone: "sdrf",
        payment_account_name: "weroui",
        payment_account_sortcode: "weroi",
        payment_account_number: "235890",
        invoice_notes: "aerguiopd",
        sub_total: "213",
        tax: "123",
        grand_total: "569"
      }
    };
  },
  methods: {
    createInvoice() {
      //Send POST for creation of a new blank invoice
      this.$store
        .dispatch(CREATE_ADMIN_INVOICE, {
          reservationId: this.$route.params.id,
          invoice: this.invoice
        })
        .then(() => {
          //Then go to the page
          console.log("Creating a new blank invoice...");
          this.$router.push({ name: "CreateInvoice" });
        });
    },
    assignDrivers() {
      console.log("selectedDriver", this.selectedDriver);
      let payload = {
        reservationId: this.$route.params.id,
        driverId: this.selectedDriver
      };
      this.$store.dispatch(UPDATE_ADMIN_RESERVATION, payload).then(() => {
        // changeDriverName
        this.changeDriverName();
      });
      this.$router.push({ name: "Reservations" });
    },
    changeDriverName() {
      this.driverName = this.getDriver.full_name;
      this.status = this.getAdminReservation.status;
    },
    async updateData() {
      await this.$store
        .dispatch(GET_ADMIN_RESERVATION, {
          reservationId: this.$route.params.id
        })
        .then(() => {
          this.code = this.getAdminReservation.code;
          this.date = this.getAdminReservation.date;
          this.destination = this.getAdminReservation.destination;
          this.employees = this.getAdminReservation.employees;
          this.pickup = this.getAdminReservation.pickup;
          this.time = this.getAdminReservation.time;
        });
      await this.$store.dispatch(GET_DRIVERS).then(() => {
        console.log(this.getDrivers);
      });
    },
    async updateDriver() {
      await this.updateData().then(() => {
        let driverId = this.getAdminReservation.driver_id;
        let companyId = this.getAdminReservation.company_id;
        console.log("driverId is", driverId);
        if (driverId) {
          this.$store.dispatch(GET_DRIVER, { driverId }).then(() => {
            this.changeDriverName();
          });
        }
        if (companyId) {
          this.$store.dispatch(GET_COMPANY, { companyId }).then(() => {
            this.companyName = this.getCompany.full_name;
          });
        }
      });
    }
  },
  mounted() {
    // this.$store.dispatch(ADMIN_GET_RESERVATION) //get reservation with store then store it in variable, then get it with mapGetters and plug it into POST invoice
    console.log("this.getAdminReservation.code", this.getAdminReservation);
    this.updateDriver();
  },
  created() {},
  computed: {
    ...mapGetters(["getAdminReservation", "getDrivers", "getDriver", "getCompany"])
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


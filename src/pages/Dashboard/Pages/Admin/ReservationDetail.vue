<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66 mx-auto">
        <form>
          <md-card>
            <md-card-header
              class="md-card-header-icon"
            >
              <div class="card-icon">
                <md-icon>card_travel</md-icon>
              </div>
              <h4 class="title">
                Itinerary  - <small>Details</small>
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
                    <md-input v-model="date"  disabled></md-input>
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

                

              </div>

              <div class="md-layout md-layout-item md-small-size-100">
                          <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Status</label>
                    <md-input v-model="status" disabled></md-input>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Driver</label>
                    <md-input v-model="driverName" disabled></md-input>
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100 " style="text-align:center;" >
                  <md-field>
                    
                    <md-autocomplete v-model="selectedDriver" :md-options="this.drivers" :md-open-on-focus="false" class="nounderline">
                      <label>Drivers</label>
                    </md-autocomplete>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <md-button class="md-raised md-success mt-4">Assign Driver</md-button>


                    </md-field>
                    
                </div>

                <!-- <div class="md-layout-item md-size-100 text-right">
                  
                </div> -->
              </div>

              </div>






            </md-card-content>
          </md-card>
        </form>
      </div>
      <!-- <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card button-color="success"> </user-card>
      </div> -->
      			<div class="md-layout-item md-medium-size-100 md-size-66 mx-auto">

				<md-button class="md-success" @click="createInvoice()">Create invoice for this reservation</md-button>
			</div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { CREATE_INVOICE, GET_ADMIN_RESERVATION, GET_DRIVERS } from "@/store/actions.type";
export default {
  name: "ReservationDetail",
  components: {
  },
  data() {
    return{
      code: "",
      date: "",
      destination: "",
      employees: "",
      pickup : "",
      status: "",
      time: "",
      driverName: "",
      companyName: "",
      employeeNames: "",
      selectedDriver: ""

    }
  },
  methods: {
    createInvoice(){

      //Send POST for creation of a new blank invoice
      this.$store.dispatch(CREATE_INVOICE, {
        reservationId: this.$route.params.id,
        invoice: this.invoice
      }).then(() => {//Then go to the page
          console.log("Creating a new blank invoice...")
          this.$router.push({ name: "CreateInvoice" });
        });

      
      
    }
  },
  mounted(){
    // this.$store.dispatch(ADMIN_GET_RESERVATION) //get reservation with store then store it in variable, then get it with mapGetters and plug it into POST invoice
    console.log("this.adminReservation.code", this.adminReservation)
  },
  created(){
    console.log("rout pararam: ", this.$route.params.id)
    this.$store.dispatch(GET_ADMIN_RESERVATION, {
      reservationId: this.$route.params.id
    }).then(()=>{
      console.log("hey?")
      console.log("this.code", this.code)
      console.log("this.adminReservation.code", this.adminReservation)
      this.code = this.adminReservation.code 
      this.date = this.adminReservation.date 
      this.destination = this.adminReservation.destination 
      this.employees = this.adminReservation.employees 
      this.pickup = this.adminReservation.pickup 
      this.status = this.adminReservation.status 
      this.time = this.adminReservation.time 
    });

    this.$store.dispatch(GET_DRIVERS, {
      reservationId: this.$route.params.id
    }).then(()=>{
      this.driverss = this.drivers;
      console.log(this.driverss)
    });
  },
  computed: {
    ...mapGetters({
      adminReservation: 'adminReservation',
      drivers: 'drivers'
    })
  }

  //need map getter reservationId
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>

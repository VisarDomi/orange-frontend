<template>
  <form>
    <md-card>
      <md-card-header
        class="md-card-header-icon"
        :class="getClass(headerColor)"
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
              <md-input v-model="company" disabled></md-input>
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
              <md-input v-model="driver" disabled></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 " style="text-align:center;" >
            <md-field>
              
              <md-autocomplete v-model="selectedEmployee" :md-options="employees" :md-open-on-focus="false" class="nounderline">
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
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    headerColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: null,
      pickup: "some address",
      destination: "some destination",
      date: "23-04-2019",
      time: "15:40",
      company: "Pepsi & CO",
      status: "unassigned",
      driver: "unassigned",
      
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
        'Creed Bratton',
        'Oscar Nunez',
        'Toby Flenderson',
        'Stanley Hudson',
        'Meredith Palmer',
        'Phyllis Lapin-Vance'
      ]
    };
  },
  methods: {
    getClass: function(headerColor) {
      return "md-card-header-" + headerColor + "";
    }
  }
};
</script>
<style scoped>

.underlined ::after{
  height:1px !important;
}
.nounderline ::after{
height:0px !important;
}



</style>

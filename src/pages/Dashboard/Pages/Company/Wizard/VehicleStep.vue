<template>
  <div>
    <h5 class="info-text">Based on your luggage amount and size you can select: </h5>
    <h5 class="info-text">{{this.message}}</h5>
    <div class="md-layout">
      <div class="md-layout-item">
        <div class="md-layout" v-if="allChoices">
          <div class="md-layout-item md-size-25 md-small-size-100" @click="economyLimoSelected()">
            <icon-checkbox v-model="model.economyLimo" icon="fas fa-car" title="Economy Limo"></icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100" @click="economyBusSelected()">
            <icon-checkbox v-model="model.economyBus" icon="fas fa-bus" title="Economy Bus"></icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100" @click="businessLimoSelected()">
            <icon-checkbox v-model="model.businessLimo" icon="fas fa-car" title="Business Limo"></icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100" @click="businessBusSelected()">
            <icon-checkbox v-model="model.businessBus" icon="fas fa-bus" title="Business Bus"></icon-checkbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { IconCheckbox } from "@/components";
import { mapGetters } from "vuex";
import { SET_VEHICLE_STEP } from "@/store/mutations.type";
export default {
  components: {
    IconCheckbox
  },
  data() {
    return {
      message: "Please Continue",
      needsCar: "",
      needsBus: "",
      allChoices: true,
      model: {
        economyLimo: false,
        economyBus: true,
        businessLimo: false,
        businessBus: false
      }
    };
  },
  computed: {
    ...mapGetters(['companyReservation'])
  },
  methods: {
    validate() {
      return this.$validator.validateAll().then(res => {
        console.log(res);
        this.$emit("on-validated", true, this.model);
        let vehicleType = "";

        if (this.model.economyLimo) {
          vehicleType = "economy limo";
        } else if (this.model.businessLimo) {
          vehicleType = "business limo";
        } else if (this.model.economyBus) {
          vehicleType = "economy buss";
        } else if (this.model.businessBus) {
          vehicleType = "business buss";
        }
        let data = { vehicleType };

        this.$store.commit(SET_VEHICLE_STEP, data);
        return true;
      });
    },
    controllLuggage(){
      let combinations = [
        ["2", "2"],
        ["2", "1"],
        ["2", "0"],
        
        ["1", "3"],
        ["1", "2"],
        ["1", "1"],
        ["1", "0"],

        ["0", "4"]
        ["0", "3"]
        ["0", "2"]
        ["0", "1"]
        ["0", "0"]
      ]
      let luggages = [
        this.companyReservation.big_luggage,
        this.companyReservation.small_luggage
      ]
      for(let combination of combinations){
        if(JSON.stringify(luggages)==JSON.stringify(combination)){
          return true
        }
      }
      return false
    },
    economyLimoSelected() {
      if(!this.companyReservation.stops.length > 2 && this.controllLuggage()){
        this.model.economyLimo = true;
        this.model.economyBus = false;
        this.model.businessBus = false;
        this.model.businessLimo = false;
      }else{
        this.model.economyLimo = false;
        this.message = "You cannot select a limo, number of employeers and/or luggage doesn't fit the criteria"
      }
    },
    economyBusSelected() {
      this.model.economyLimo = false;
      this.model.economyBus = true;
      this.model.businessBus = false;
      this.model.businessLimo = false;
      this.message = "Please Continue"
    },
    businessLimoSelected() {
      if(!this.companyReservation.stops.length > 3 && this.controllLuggage()){
        this.model.economyLimo = false;
        this.model.economyBus = false;
        this.model.businessBus = false;
        this.model.businessLimo = true;
      }else{
        this.model.businessLimo = false;
        this.message = "You cannot select a limo, number of employeers and/or luggage doesn't fit the criteria"
      }
    },
    businessBusSelected() {
      this.model.economyLimo = false;
      this.model.economyBus = false;
      this.model.businessBus = true;
      this.model.businessLimo = false;
      this.message = "Please Continue"
    }
  }
};
</script>
<style scoped>
.md-card-wizard[data-color="green"] .choice:hover .icon,
.md-card-wizard[data-color="green"] .choice.active .icon {
  border-color: orange;
  color: orange;
}
</style>

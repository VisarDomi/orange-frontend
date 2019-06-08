<template>
  <div>
    <h5 class="info-text">Based on your luggage amount and size you can select: </h5>
    <div class="md-layout">
      <div class="md-layout-item">
        <div class="md-layout" v-if="allChoices">

          <div class="md-layout-item md-size-25 md-small-size-100" @click="economyLimoSelected()">

            <icon-checkbox
              v-model="model.economyLimo"
              icon="fas fa-car"
              title="Economy"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100" @click="economyBusSelected()">
            <icon-checkbox
              v-model="model.economyBus"
              icon="fas fa-bus"
              title="Economy"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100" @click="businessLimoSelected()">
            <icon-checkbox
              v-model="model.businessLimo"
              icon="fas fa-car"
              title="Business"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100" @click="businessBusSelected()">
            <icon-checkbox
              v-model="model.businessBus"
              icon="fas fa-bus"
              title="Business"
            >
            </icon-checkbox>


          </div>          
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { IconCheckbox } from "@/components";
import { mapGetters } from "vuex";
import {
  UPDATE_VEHICLE_STEP
} from "@/store/actions.type";
export default {
  components: {
    IconCheckbox
  },
  data() {
    return {
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
  methods: {
    validate() {
      return this.$validator.validateAll().then(res => {
        console.log(res);
        this.$emit("on-validated", true, this.model);
        // return Promise.resolve(true);
        let vehicleType = ''

        if(this.model.economyLimo){
          vehicleType = 'economy limo';
        }else if(this.model.businessLimo){
          vehicleType = 'business limo';
        }else if(this.model.economyBus){
          vehicleType = 'economy buss';
        }else if(this.model.businessBus){
          vehicleType = 'business buss';
        }
        let data = {
          vehicle_type : vehicleType
        }

        this.$store.dispatch(UPDATE_VEHICLE_STEP, data);
        return true;
      });
    },

    test() {
      console.log("TEST");
    },
    economyLimoSelected() {
      this.model.economyLimo = true;
      this.model.economyBus = false;
      this.model.businessBus = false;
      this.model.businessLimo = false;
    },
    economyBusSelected() {
      this.model.economyLimo = false;
      this.model.economyBus = true;
      this.model.businessBus = false;
      this.model.businessLimo = false;
    },
    businessLimoSelected() {
      this.model.economyLimo = false;
      this.model.economyBus = false;
      this.model.businessBus = false;
      this.model.businessLimo = true;
    },
    businessBusSelected() {
      this.model.economyLimo = false;
      this.model.economyBus = false;
      this.model.businessBus = true;
      this.model.businessLimo = false;
    },
  }
};
</script>
<style scoped>

.md-card-wizard[data-color="green"] .choice:hover .icon, .md-card-wizard[data-color="green"] .choice.active .icon {
    border-color: orange;
    color: orange;
}
</style>

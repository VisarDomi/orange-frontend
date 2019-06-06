<template>
  <div>
    <h5 class="info-text">Based on your luggage amount and size you can select: </h5>
    <div class="md-layout">
      <div class="md-layout-item">
        <div class="md-layout" v-if="needsCar">

          <div class="md-layout-item md-size-25 md-small-size-100">


            <icon-checkbox
              v-model="model.economycar"
              icon="fas fa-car"
              title="Economy"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <icon-checkbox
              v-model="model.economybus"
              icon="fas fa-bus"
              title="Economy"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <icon-checkbox
              v-model="model.businesscar"
              icon="fas fa-car"
              title="Business"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <icon-checkbox
              v-model="model.businessbus"
              icon="fas fa-bus"
              title="Business"
            >
            </icon-checkbox>


          </div>          
        </div>

        <div class="md-layout" v-if="needsBus">

          <div class="md-layout-item md-size-25 md-small-size-100">


            <icon-checkbox
              v-model="model.economycar"
              icon="fas fa-car"
              title="Economy"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <icon-checkbox
              v-model="model.economybus"
              icon="fas fa-bus"
              title="Economy"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <icon-checkbox
              v-model="model.businesscar"
              icon="fas fa-car"
              title="Business"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <icon-checkbox
              v-model="model.businessbus"
              icon="fas fa-bus"
              title="Business"
            >
            </icon-checkbox>


          </div>          
        </div>

        <div class="md-layout" v-if="allChoices">

          <div class="md-layout-item md-size-25 md-small-size-100">


            <icon-checkbox
              v-model="model.economycar"
              icon="fas fa-car"
              title="Economy"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <icon-checkbox
              v-model="model.economybus"
              icon="fas fa-bus"
              title="Economy"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <icon-checkbox
              v-model="model.businesscar"
              icon="fas fa-car"
              title="Business"
            >
            </icon-checkbox>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <icon-checkbox
              v-model="model.businessbus"
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
        economycar: false,
        economybus: true,
        businesscar: false,
        businessbus: false
      }
    };
  },
  methods: {
    validate() {
      this.$emit("on-validated", true, this.model);
      return Promise.resolve(true);
    }
  }
};
</script>
<style scoped>

.md-card-wizard[data-color="green"] .choice:hover .icon, .md-card-wizard[data-color="green"] .choice.active .icon {
    border-color: orange;
    color: orange;
}
</style>

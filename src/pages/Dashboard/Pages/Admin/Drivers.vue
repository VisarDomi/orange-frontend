<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-button class="md-warning" @click="addDriver()">Add new driver...</md-button>
      </div>
    </div>

    <div class="md-layout">
      <div
        v-for="(driver, index) in this.driversData"
        :key="driver.id"
        class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100 auto-mx"
      >
        <md-card>
          <!-- <md-card-media md-medium>
          <img class="img" :src="profileCard">
          </md-card-media>-->

          <md-card-header>
            <div class="md-title">{{driver.full_name}}</div>
            <div class="md-subhead">Driver</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <!-- <div>
                <md-button class="md-warning" @click.native="open_driver(driver)">Details</md-button>
              </div> -->
              <md-card-expand-trigger>
                <md-button class="md-button md-warning">
                  <md-icon>keyboard_arrow_down</md-icon>Details
                </md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                <md-field>
                    <label>Full Name</label>
                    <md-input  
                      v-model="driver.full_name" 
                      :disabled="!driver.nameEditable"
                    ></md-input>

                    <md-button
                      v-if="!driver.nameEditable"
                      class="md-just-icon md-warning md-simple"
                      @click="enableNameEditing(driver.id)"
                    >
                      <md-icon>edit</md-icon>
                    </md-button>
                    <md-button
                      v-if="driver.nameEditable"
                      class="md-just-icon md-warning md-simple"
                      @click="saveDriver(driver, 'driverName')"
                    >
                      <md-icon>done</md-icon>
                    </md-button>
                    
                  </md-field>
                  <md-field>
                    <label>Status</label>
                    <md-input 
                      v-model="driver.status"
                      :disabled="!driver.statusEditable"
                    ></md-input>
                  </md-field>
                  <div>
                    <md-button class="md-danger" @click.native="delete_driver(driver, index)">Delete</md-button>
                  </div>
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { PricingCard, TestimonialCard } from "@/components";
import { GET_DRIVERS, GET_DRIVER, UPDATE_DRIVER, DELETE_DRIVER } from "@/store/actions.type";

import { mapGetters } from "vuex";
export default {
  name: "Drivers",
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
      driversData: [],
    };
  },
  methods: {
    enableNameEditing(id){
      for(let driver in this.driversData){
        if(this.driversData[driver].id == id){
          this.driversData[driver].nameEditable = true;
          let cloneDriver = {...this.driversData[driver]}
          this.driversData.splice(driver, 1);
          this.driversData.splice(driver, 0, cloneDriver);
        }
      }
    },
    saveDriver(driver, editing){
      if(editing == "driverName"){
        driver.nameEditable = false
      }else{
        driver.statusEditable = false
      }
      let driverData = {
        full_name: driver.full_name,
        status: driver.status,
        driverId: driver.id
      }
      console.log(driverData)
      this.$store.dispatch(UPDATE_DRIVER, driverData);
    },
    delete_driver(driver, index){
      this.$store.dispatch(DELETE_DRIVER, driver).then(() => {
        this.$store.dispatch(GET_DRIVERS);
      });
      
      this.driversData.splice(index, 1);
    },
    addDriver() {
      this.$router.push({ name: "CreateDriver" });
    },
    open_driver(driver) {
      this.$store.dispatch(GET_DRIVER, { driverId: driver.id });
      this.$router.push({
        name: "DriverDetail",
        params: {
          id: driver.id
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
    this.$store.dispatch(GET_DRIVERS).then(() => {
      for(let driver of this.drivers){
        this.driversData.push(driver);
      }
      for(let driver of this.driversData){
        console.log("driver object is: ", driver)
        driver.nameEditable = false
        driver.statusEditable = false
      }
    })
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  computed: {
    ...mapGetters(["drivers"])
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>

<template>
    <div>
<div class="md-layout">
    <div class="md-layout-item">

        <md-button class="md-success" @click="addDriver()">Add new driver...</md-button>
    </div>
</div>

  <div class="md-layout">

    <div class="md-layout-item md-large-size-20 md-xlarge-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100 auto-mx">
      <md-card>
        <!-- <md-card-media md-medium>
          <img class="img" :src="profileCard">
        </md-card-media> -->

        <md-card-header>
          <div class="md-title">Andrew Yang</div>
          <div class="md-subhead">Limousine 3 driver</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between" style="text-align:center;">
            <div>
              <md-button>Details</md-button>
            </div>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>Member of company since 2007.</md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>
    </div>


  </div>
    </div>



</template>

<script>
import { PricingCard, TestimonialCard } from "@/components";

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
    return {};
  },
  methods: {
      addDriver(){
          this.$router.push({ name: "CreateDriver" });
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
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>

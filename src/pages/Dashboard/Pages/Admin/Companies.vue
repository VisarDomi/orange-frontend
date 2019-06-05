<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-button class="md-warning" @click="addCompany()">Add new company...</md-button>
      </div>
    </div>

    <div class="md-layout">
      <div
        v-for="company in this.companys"
        :key="company.id"
        class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100 auto-mx"
      >
        <md-card>
          <!-- <md-card-media md-medium>
          <img class="img" :src="profileCard">
          </md-card-media>-->

          <md-card-header>
            <div class="md-title">{{company.full_name}}</div>
            <div class="md-subhead">Company</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button class="md-warning" @click.native="open_company(company)">Details</md-button>
              </div>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>Company since 2007.</md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { PricingCard, TestimonialCard } from "@/components";
import { GET_COMPANYS, GET_COMPANY } from "@/store/actions.type";

import { mapGetters } from "vuex";
export default {
  name: "Companies",
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
    addCompany() {
      this.$router.push({ name: "CreateCompany" });
    },
    open_company(company) {
      this.$store.dispatch(GET_COMPANY, { companyId: company.id });
      this.$router.push({
        name: "CompanyDetail",
        params: {
          id: company.id
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
    this.$store.dispatch(GET_COMPANYS);
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  computed: {
    ...mapGetters(["companys"])
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>

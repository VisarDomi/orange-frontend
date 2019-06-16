<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-button class="md-warning" @click="addEmployee()">Add new employee...</md-button>
      </div>
    </div>

    <div class="md-layout">
      <div
        v-for="employee in this.getEmployees"
        :key="employee.id"
        class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100 auto-mx"
      >
        <md-card>
          <!-- <md-card-media md-medium>
          <img class="img" :src="profileCard">
          </md-card-media>-->

          <md-card-header>
            <div class="md-title">{{employee.full_name}}</div>
            <div class="md-subhead">Employee</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button class="md-warning" @click.native="openEmployee(employee)">Details</md-button>
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
import { GET_EMPLOYEES, GET_EMPLOYEE } from "@/store/actions.type";
import { mapGetters } from "vuex";
import { getUser } from "@/store/services/userstorage";

export default {
  name: "CompanyEmployees",
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
      companyId: getUser().company_id
    };
  },
  methods: {
    addEmployee() {
      this.$router.push({ name: "CompanyCreateEmployee" });
    },
    openEmployee(employee) {
      let payload = {
        companyId: this.companyId,
        employeeId: employee.id
      };
      this.$store.dispatch(GET_EMPLOYEE, payload);
      this.$router.push({
        name: "CompanyEmployeeDetail",
        params: { id: employee.id }
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
    let payload = { companyId: this.companyId };
    this.$store.dispatch(GET_EMPLOYEES, payload);
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  computed: {
    ...mapGetters(["getEmployees"])
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>

<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-66 md-xsmall-size-80 mx-auto">
      <simple-wizard>
        <template slot="header">
          <h3 class="title">Create your reservation</h3>
          <h5 class="category">Please enter all the required information.</h5>
        </template>

        <wizard-tab :before-change="() => validateStep('step1')">
          <template slot="label">Employees</template>
          <employee-step ref="step1" @on-validated="onStepValidated"></employee-step>
        </wizard-tab>

        <wizard-tab :before-change="() => validateStep('step2')">
          <template slot="label">Vehicle</template>
          <vehicle-step ref="step2" @on-validated="onStepValidated"></vehicle-step>
        </wizard-tab>

        <wizard-tab :before-change="() => validateStep('step3')">
          <template slot="label">Payment</template>
          <payment-step ref="step3" @on-validated="wizardComplete"></payment-step>
        </wizard-tab>
      </simple-wizard>
    </div>
  </div>
</template>
<script>
import EmployeeStep from "./Wizard/EmployeeStep.vue";
import VehicleStep from "./Wizard/VehicleStep.vue";
import PaymentStep from "./Wizard/PaymentStep.vue";
import swal from "sweetalert2";
import { SimpleWizard, WizardTab } from "@/components";
import { mapGetters } from "vuex";
import { CREATE_COMPANY_RESERVATION } from "@/store/actions.type";
import { SET_COMPANY_RESERVATION } from "@/store/mutations.type";
import { getUser } from "@/store/services/userstorage";

export default {
  data() {
    return {
      wizardModel: {}
    };
  },
  components: {
    EmployeeStep,
    VehicleStep,
    PaymentStep,
    SimpleWizard,
    WizardTab
  },
  computed: {
    ...mapGetters(["getCompanyReservation"])
  },
  methods: {
    validateStep(ref) {
      return this.$refs[ref].validate();
    },
    onStepValidated(validated, model) {
      this.wizardModel = { ...this.wizardModel, ...model };
    },
    wizardComplete() {
      let payload = {
        reservation: this.getCompanyReservation,
        companyId: getUser().company_id
      };
      this.$store.dispatch(CREATE_COMPANY_RESERVATION, payload);

      this.$router.push({ name: "CompanyReservations" });
      // swal({
      //   title: "Good job!",
      //   text: "You clicked the finish button!",
      //   type: "success",
      //   confirmButtonClass: "md-button md-warning",
      //   buttonsStyling: false
      // });
    }
  },
  mounted() {
    this.$store.commit(SET_COMPANY_RESERVATION, {});
  }
};
</script>

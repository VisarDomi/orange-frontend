<template>
  <div>
    <h5 class="info-text">What is your desired payment method?</h5>
    <div class="md-layout">
      <div class="md-layout-item">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100" @click="CreditCardSelected()">
            <icon-checkbox v-model="model.creditCard" icon="fas fa-credit-card" title="Credit Card"></icon-checkbox>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100" @click="CashSelected()">
            <icon-checkbox v-model="model.cash" icon="fas fa-money-bill-alt" title="Cash"></icon-checkbox>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100" @click="InvoiceSelected()">
            <icon-checkbox v-model="model.invoice" icon="fas fa-file-alt" title="Invoice"></icon-checkbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { IconCheckbox } from "@/components";
import { SET_PAYMENT_STEP } from "@/store/mutations.type";
export default {
  components: {
    IconCheckbox
  },
  data() {
    return {
      model: {
        creditCard: false,
        cash: true,
        invoice: false
      }
    };
  },
  methods: {
    validate() {
      return this.$validator.validateAll().then(res => {
        console.log(res);
        this.$emit("on-validated", true, this.model);
        // return Promise.resolve(true);
        let paymentMethod = "";

        if (this.model.creditCard) {
          paymentMethod = "credit card";
        } else if (this.model.cash) {
          paymentMethod = "cash";
        } else if (this.model.invoice) {
          paymentMethod = "invoice";
        }

        let data = { paymentMethod };

        this.$store.commit(SET_PAYMENT_STEP, data);
        return true;
      });
    },
    CreditCardSelected() {
      this.model.creditCard = true;
      this.model.cash = false;
      this.model.invoice = false;
    },
    CashSelected() {
      this.model.creditCard = false;
      this.model.cash = true;
      this.model.invoice = false;
    },
    InvoiceSelected() {
      this.model.creditCard = false;
      this.model.cash = false;
      this.model.invoice = true;
    }
  }
};
</script>
<style></style>

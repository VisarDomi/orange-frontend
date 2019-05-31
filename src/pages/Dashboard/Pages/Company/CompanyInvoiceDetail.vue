<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-40 mx-auto">
        <form>
          <md-card>
            <md-card-header class="md-card-header-icon">
              <div class="card-icon">
                <md-icon>card_travel</md-icon>
              </div>
              <h4 class="title">
                Invoice -
                <small>Details</small>
              </h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter md-size-100">
                <div class="md-layout md-layout-item md-small-size-100 md-size-100">
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Date</label>
                      <md-input v-model="this.invoice.date" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Due</label>
                      <md-input v-model="this.invoice.due" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>From Business Name</label>
                      <md-input v-model="this.invoice.from_business_name" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>To Client Name</label>
                      <md-input v-model="this.invoice.to_client_name" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Grand Total</label>
                      <md-input v-model="this.invoice.grand_total" disabled></md-input>
                    </md-field>
                  </div>

                  <!-- <div class="md-layout-item md-size-100 text-right">

                  </div>-->
                </div>
              </div>
            </md-card-content>
          </md-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { UserCard } from "@/pages";
import { GET_COMPANY_INVOICE } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "CompanyInvoiceDetail",
  components: {
    UserCard
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
  },
  created() {
    this.$store.dispatch(GET_COMPANY_INVOICE, {
      invoiceId: this.$route.params.id
    });
  },
  computed: {
    ...mapGetters(["invoice"])
  }
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>

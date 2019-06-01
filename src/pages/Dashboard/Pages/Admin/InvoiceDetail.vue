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
                Reservation -
                <small>Details</small>
              </h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter md-size-100">
                <div class="md-layout md-layout-item md-small-size-100 md-size-100">

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Date</label>
                      <md-input v-model="date" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>From business name</label>
                      <md-input v-model="from_business_name" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>To business name</label>
                      <md-input v-model="to_business_name" disabled></md-input>
                    </md-field>
                  </div>

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
import { GET_ADMIN_INVOICE } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "InvoiceDetail",
  components: {
    UserCard
  },
  data() {
    return {
      date: "",
      from_business_name: "",
      to_business_name: ""
    };
  },
  methods: {},
  mounted() {
    // this.$store.dispatch(ADMIN_GET_ADMIN_INVOICE) //get invoice with store then store it in variable, then get it with mapGetters and plug it into POST invoice
  },
  created() {
    this.$store
      .dispatch(GET_ADMIN_INVOICE, { invoiceId: this.$route.params.id })
      .then(() => {
        this.date = this.adminInvoice.date;
        this.from_business_name = this.adminInvoice.from_business_name;
        this.to_business_name = this.adminInvoice.to_business_name;
      });
  },
  computed: {
    ...mapGetters(["adminInvoice"])
  }
  //need map getter invoiceId
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>

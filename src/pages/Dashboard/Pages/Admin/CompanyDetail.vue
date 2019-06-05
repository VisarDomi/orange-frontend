<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-40 mx-auto">
        <form>
          <md-card>
            <md-card-header class="md-card-header-icon md-card-header-green">
              <div class="card-icon">
                <md-icon>card_travel</md-icon>
              </div>
              <h4 class="title">
                Company -
                <small>Details</small>
              </h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter md-size-100">
                <div class="md-layout md-layout-item md-small-size-100 md-size-100">
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Name</label>
                      <md-input v-model="full_name" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Payment Frequency</label>
                      <md-input  v-model="payment_frequency" disabled></md-input>
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
import { GET_COMPANY } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "CompanyDetail",
  components: {
    UserCard
  },
  data() {
    return {
      full_name: "",
      payment_frequency: ""
    };
  },
  methods: {},
  mounted() {},
  created() {
    this.$store
      .dispatch(GET_COMPANY, {
        companyId: this.$route.params.id
      })
      .then(() => {
        this.full_name = this.company.full_name;
        this.payment_frequency = this.company.payment_frequency;
      });
  },
  computed: {
    ...mapGetters(["company"])
  }
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>

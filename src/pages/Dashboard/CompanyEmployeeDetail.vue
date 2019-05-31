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
                      <label>Pickup</label>
                      <md-input v-model="pickup" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Destination</label>
                      <md-input v-model="destination" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Date</label>
                      <md-input v-model="date" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Time</label>
                      <md-input v-model="time" disabled></md-input>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Status</label>
                      <md-input v-model="status" disabled></md-input>
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
import { GET_RESERVATION } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "CompanyEmployeeDetail",
  components: {
    UserCard
  },
  data() {
    return {
      pickup: "",
      destination: "",
      date: "",
      code: "",
      time: "",
      status: ""
    };
  },
  methods: {},
  mounted() {
    // this.$store.dispatch(ADMIN_GET_RESERVATION) //get reservation with store then store it in variable, then get it with mapGetters and plug it into POST invoice
  },
  created() {
    this.$store
      .dispatch(GET_RESERVATION, { reservationId: this.$route.params.id })
      .then(() => {
        this.pickup = this.reservation.pickup;
        this.destination = this.reservation.destination;
        this.date = this.reservation.date;
        this.code = this.reservation.code;
        this.time = this.reservation.time;
        this.status = this.reservation.status;
      });
  },
  computed: {
    ...mapGetters(["reservation"])
  }
  //need map getter reservationId
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>

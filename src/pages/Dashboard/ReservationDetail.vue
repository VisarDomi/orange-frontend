<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66 mx-auto">
        <edit-profile-form header-color="green"> </edit-profile-form>
      </div>
      <!-- <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card button-color="success"> </user-card>
      </div> -->
      			<div class="md-layout-item md-medium-size-100 md-size-66 mx-auto">

				<md-button class="md-success" @click="createInvoice()">Create invoice for this reservation</md-button>
			</div>
    </div>

  </div>
</template>

<script>
import { EditProfileForm, UserCard } from "@/pages";

import { CREATE_INVOICE } from "@/store/actions.type";
export default {
  name: "ReservationDetail",
  components: {
    EditProfileForm,
    UserCard
  },
  data() {
    return{
      reservationId: 1,
      invoice: {
        "ref": "ref2",
        "date": "2018-12-31",
        "due": "2019-12-31",
        "from_business_name": "adsf",
        "from_addressline_1": "adsfasd",
        "from_addressline_2": "wer",
        "from_city": "werf",
        "from_postcode": "sdf",
        "from_vat": "sdsf",
        "from_phone": "sdqwf",
        "to_client_name": "sdaflk",
        "to_addressline_1": "werjo",
        "to_addressline_2": "wer",
        "to_city": "werg",
        "to_postcode": "edfg",
        "to_vat": "sdwef",
        "to_phone": "sdrf",
        "payment_account_name": "weroui",
        "payment_account_sortcode": "weroi",
        "payment_account_number": "235890",
        "invoice_notes": "aerguiopd",
        "sub_total": "213",
        "tax": "123",
        "grand_total": "569"
      }
    }
  },
  methods: {
    createInvoice(){
      //Send POST for creation of a new blank invoice
      this.$store.dispatch(CREATE_INVOICE, {
        reservationId: 1,
        invoice: this.invoice
      }).then(() => {//Then go to the page
          console.log("Creating a new blank invoice...")
          this.$router.push({ name: "CreateInvoice" });
        });

      
      
    }
  },
  mounted(){
    // this.$store.dispatch(ADMIN_GET_RESERVATION) //get reservation with store then store it in variable, then get it with mapGetters and plug it into POST invoice
  }

  //need map getter reservationId
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>

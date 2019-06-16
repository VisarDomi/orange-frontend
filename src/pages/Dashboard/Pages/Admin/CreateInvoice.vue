<template>
  <form class="md-layout" @submit.prevent="generateInvoice()">
    <!-- ------------ -->
    <!-- From  -->
    <!-- ------------- -->
    <md-card
      class="md-layout-item md-size-large-30 md-size-small-100 md-size-medium-100 md-size-xsmall-100"
    >
      <md-card-header class="md-card-header-text md-card-header-green">
        <div class="card-text">
          <h4 class="title">To</h4>
        </div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Company name</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.ref"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
                placeholder="Orange Limo"
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Address Line 1</label>
          <div class="md-layout-item">
            <md-field>
              <label>Address</label>
              <md-input
                data-vv-name="required"
                type="text"
                required
                v-model="invoice.from_addressline_1"
                placeholder="Write the primary address"
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>optional</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Address Line 2</label>
          <div class="md-layout-item">
            <md-field>
              <label>Address</label>
              <md-input
                v-model="invoice.from_addressline_2"
                placeholder="Write the secondary address"
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>optional</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">City</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.from_city"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Zip code</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.from_postcode"
                data-vv-name="number"
                type="number"
                v-validate="modelValidations.number"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>numeric</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Phone</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.from_phone"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">VAT</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.from_vat"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>-->
        </div>
      </md-card-content>
    </md-card>

    <!-- ------------ -->
    <!-- To  -->
    <!-- ------------- -->

    <md-card
      class="md-layout-item md-size-large-30 md-size-small-100 md-size-medium-100 md-size-xsmall-100"
    >
      <md-card-header class="md-card-header-text md-card-header-green">
        <div class="card-text">
          <h4 class="title">From</h4>
        </div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Company name</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.to_client_name"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
              <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Address Line 1</label>
          <div class="md-layout-item">
            <md-field>
              <label>Address</label>
              <md-input
                data-vv-name="required"
                type="text"
                required
                v-model="invoice.to_addressline_1"
                placeholder="Write the primary address"
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
              <code>optional</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Address Line 2</label>
          <div class="md-layout-item">
            <md-field>
              <label>Address</label>
              <md-input
                v-model="invoice.to_addressline_2"
                placeholder="Write the secondary address"
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
              <code>optional</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">City</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.to_city"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
              <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Zip code</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.to_postcode"
                data-vv-name="number"
                type="number"
                v-validate="modelValidations.number"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
              <code>numeric</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Phone</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.to_phone"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
              <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">VAT</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.to_vat"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
              <code>required</code>
          </label>-->
        </div>
      </md-card-content>
    </md-card>

    <!-- ------------ -->
    <!-- Invoice details  -->
    <!-- ------------- -->

    <md-card
      class="md-layout-item md-size-large-30 md-size-small-100 md-size-medium-100 md-size-xsmall-100"
    >
      <md-card-header class="md-card-header-text md-card-header-green">
        <div class="card-text">
          <h4 class="title">Invoice Details</h4>
        </div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Invoice #</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.ref"
                data-vv-name="number"
                type="number"
                v-validate="modelValidations.number"
                disabled
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>numeric</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Invoice Date</label>
          <md-datepicker
            class="md-layout-item"
            v-model="invoice.date"
            md-immediately
            required
            data-vv-name="required"
            v-validate="modelValidations.required"
          />
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Invoice Due</label>
          <md-datepicker class="md-layout-item" v-model="invoice.due" md-immediately/>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>-->
        </div>
      </md-card-content>
    </md-card>

    <!-- ------------ -->
    <!-- Invoice Items  -->
    <!-- ------------- -->

    <md-table
      md-card
      class="md-layout-item md-size-100 md-size-large-100 md-size-small-100 md-size-medium-100 md-size-xsmall-100"
    >
      <md-table-toolbar>
        <h1 class="md-title">
          <strong>Items</strong>
        </h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head md-numeric>No.</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Date</md-table-head>
        <md-table-head>Quantity</md-table-head>
        <md-table-head>Price</md-table-head>
        <md-table-head>Discount %</md-table-head>
        <md-table-head>Tax %</md-table-head>
        <md-table-head>Total</md-table-head>
      </md-table-row>

      <md-table-row v-for="(item, index) in this.getAdminItems" :key="item.serial">
        <md-table-cell numeric>{{index}}</md-table-cell>
        <md-table-cell>{{item.message}}</md-table-cell>
        <md-table-cell>{{item.pickupDate | prettyDate}}</md-table-cell>
        <md-table-cell>{{item.nStops}}</md-table-cell>
        <md-table-cell>{{item.price}}</md-table-cell>
        <md-table-cell>{{item.tax}}</md-table-cell>
        <md-table-cell>{{item.total | money}}</md-table-cell>
        <md-button class="md-just-icon md-round md-danger" @click="removeItem(item.serial)">
          <md-icon>close</md-icon>
        </md-button>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>{{this.rowCounter+1}}</md-table-cell>
        <md-table-cell>
          <md-field>
            <md-input v-model="invoiceItem.message" type="text"></md-input>
          </md-field>
        </md-table-cell>

        <md-table-cell>
          <md-datepicker class="md-layout-item" v-model="invoiceItem.pickupDate" md-immediately/>
        </md-table-cell>

        <md-table-cell>
          <md-field>
            <md-input
              v-model="invoiceItem.nStops"
              data-vv-name="number"
              type="number"
              v-validate="modelValidations.number"
            ></md-input>
          </md-field>
        </md-table-cell>
        <md-table-cell>
          <md-field>
            <md-input
              v-model="invoiceItem.price"
              data-vv-name="number"
              type="number"
              v-validate="modelValidations.number"
            ></md-input>
          </md-field>
        </md-table-cell>
        <md-table-cell>
          <md-field>
            <md-input
              v-model="invoiceItem.tax"
              data-vv-name="range"
              type="text"
              v-validate="modelValidations.range"
            ></md-input>
          </md-field>
        </md-table-cell>
        <md-table-cell>{{invoiceItem.total | money}}</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-round md-warning" @click="addItem()">
            <md-icon>add</md-icon>
          </md-button>&nbsp;
        </md-table-cell>
      </md-table-row>
    </md-table>

    <!-- ------------ -->
    <!-- Payment details  -->
    <!-- ------------- -->

    <md-card
      class="md-layout-item md-size-xlarge-50 md-size-large-50 md-size-small-100 md-size-medium-100 md-size-xsmall-100"
    >
      <md-card-header class="md-card-header-text md-card-header-green">
        <div class="card-text">
          <h4 class="title">Payment Details</h4>
        </div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Account name</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.payment_account_name"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Account sortcode</label>
          <div class="md-layout-item">
            <md-field>
              <md-input v-model="invoice.payment_account_sortcode"></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>optional</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Account number</label>
          <div class="md-layout-item">
            <md-field>
              <md-input
                v-model="invoice.payment_account_number"
                data-vv-name="number"
                type="number"
                v-validate="modelValidations.number"
                required
              ></md-input>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>numeric</code>
          </label>-->
        </div>
      </md-card-content>
    </md-card>

    <!-- ------------ -->
    <!-- Invoice notes  -->
    <!-- ------------- -->

    <md-card
      class="md-layout-item md-size-xlarge-50 md-size-large-50 md-size-small-100 md-size-medium-100 md-size-xsmall-100"
    >
      <md-card-header class="md-card-header-text md-card-header-green">
        <div class="card-text">
          <h4 class="title">Invoice notes</h4>
        </div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item">
            <md-field>
              <label>Textarea</label>
              <md-textarea
                v-model="invoice.invoice_notes"
                placeholder="Thank you for your business."
              ></md-textarea>
            </md-field>
          </div>
        </div>
      </md-card-content>
    </md-card>

    <div class="md-layout-item md-size-100 mx-auto" style="text-align:center;">
      <md-button class="md-warning md-lg" type="submit">Generate Invoice</md-button>
    </div>
  </form>
</template>
<script>
import { SlideYDownTransition } from "vue2-transitions";
import { UPDATE_ADMIN_INVOICE } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "CreateInvoice",
  components: {
    SlideYDownTransition
  },
  data() {
    return {
      invoice: {
        ref: "",
        datum: "",
        rechnungNr: "",
        uidNr: "",
        bankName: "",
        bic: "",
        iban: "",
        anName: "",
        anCompany: "",
        anCompanyAddress: "",
        anCompanyPostcode: "",
        anCompanyCity: "",
        anCompanyState: "",
        rechnungsersteller: "",
        zahlungsform: "",
        rechnungDatum: "",
        zahlungsziel: "",
        tax: 0,
        total: 0,
        items: []
      },
      invoiceItem: {
        serial: "",
        pickupDate: "",
        pickupAddress: "",
        kst: "",
        ordererName: "",
        message: "",
        nStops: "",
        destination: "",
        price: "",
        rowData: []
      },
      rowCounter: 0,
      selectedClose: null,
      touched: {
        range: false,
        required: false,
        number: false
      },
      modelValidations: {
        range: {
          required: true,
          min: 0,
          max: 100
        },
        required: {
          required: true
        },
        number: {
          required: true,
          numeric: true
        }
      }
    };
  },
  methods: {
    addItem() {
      this.rowCounter++;
      console.log("row conuter incremented to: ", this.rowCounter);
      let calculated_total =
        parseFloat(this.invoice_item.quantity) *
        parseFloat(this.invoice_item.price);
      calculated_total =
        calculated_total -
        (parseFloat(this.invoice_item.discount) / 100) * calculated_total;
      calculated_total =
        calculated_total +
        (parseFloat(this.invoice_item.tax) / 100) * calculated_total;
      console.log("calculated total is: ", calculated_total);
      let invoice_item_add = {
        serial: this.rowCounter,
        description: this.invoice_item.description,
        date: this.invoice_item.date,
        quantity: this.invoice_item.quantity,
        price: this.invoice_item.price,
        discount: this.invoice_item.discount,
        tax: this.invoice_item.tax,
        total: calculated_total
      };
      console.log("the invoice item add object is: ", invoice_item_add);
      invoice_item_add.total = calculated_total + ""; //transform to string because backend
      this.invoice_item.rowData.push(invoice_item_add);

      (this.invoice_item.description = ""),
        (this.invoice_item.date = null),
        (this.invoice_item.quantity = ""),
        (this.invoice_item.price = ""),
        (this.invoice_item.discount = ""),
        (this.invoice_item.tax = ""),
        (this.invoice_item.total = "");
    },
    removeItem(pos) {
      this.rowCounter--;
      this.invoice_item.rowData.pop(); // this pops last item, not current selection
    },
    validate() {
      this.$validator.validateAll().then(isValid => {
        console.log("is valid on validate() function");
        // this.$emit("on-submit", this.registerForm, isValid);
      });
    },
    async generateInvoice() {
      let invoice = {
        ref: this.invoice.ref,
        datum: this.invoice.datum,
        rechnung_nr: this.invoice.rechnungNr,
        uid_nr: this.invoice.uidNr,
        bank_name: this.invoice.bankName,
        bic: this.invoice.bic,
        iban: this.invoice.iban,
        anName: this.invoice.anName,
        anCompany: this.invoice.anCompany,
        anCompanyAddress: this.invoice.anCompanyAddress,
        anCompanyPostcode: this.invoice.anCompanyPostcode,
        anCompanyCity: this.invoice.anCompanyCity,
        anCompanyState: this.invoice.anCompanyState,
        rechnungsersteller: this.invoice.rechnungsersteller,
        zahlungsform: this.invoice.zahlungsform,
        rechnungDatum: this.invoice.rechnungDatum,
        zahlungsziel: this.invoice.zahlungsziel,
        tax: this.invoice.tax,
        total: this.invoice.total,
        items: this.invoiceItem.rowData
      };
      let payload = {
        reservationId: this.$route.params.id,
        invoice: invoice
      };
      await this.$store.dispatch(CREATE_ADMIN_INVOICE, payload);

      //Then go to the page
      console.log("Updated invoice.");
      this.$router.push({
        name: "InvoiceDetail",
        params: { id: this.getAdminInvoice.id }
      });
    }
  },
  computed: {
    ...mapGetters(["getAdminInvoice"])
  },
  watch: {
    range() {
      this.touched.range = true;
    },
    required() {
      this.touched.required = true;
    },
    number() {
      this.touched.number = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.md-card .md-card-actions {
  border: none;
}

.text-center {
  justify-content: center !important;
}

.md-card {
  margin-right: 1%;
  margin-left: 1%;
}
</style>

<style>
.md-card-wizard[data-color="green"] .moving-tab {
  background-color: orange;
}

.md-card .md-card-header-green .card-text {
  background: orange;
}
.md-datepicker-dialog .md-datepicker-header {
  background: orange !important;
}
.md-datepicker-today,
.md-datepicker-today:hover,
.md-datepicker-today:focus,
.md-datepicker-selected,
.md-datepicker-selected:hover,
.md-datepicker-selected:focus {
  background-color: orange !important;
  color: #ffffff !important;
}

.md-button.md-primary {
  background-color: orange !important;
}

.md-button.md-primary:hover {
  background-color: orange !important;
}
</style>

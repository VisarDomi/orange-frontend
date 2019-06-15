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
                v-model="completed_invoice.ref"
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
                v-model="completed_invoice.from_addressline_1"
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
                v-model="completed_invoice.from_addressline_2"
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
                v-model="completed_invoice.from_city"
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
                v-model="completed_invoice.from_postcode"
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
                v-model="completed_invoice.from_phone"
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
                v-model="completed_invoice.from_vat"
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
                v-model="completed_invoice.to_client_name"
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
                v-model="completed_invoice.to_addressline_1"
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
                v-model="completed_invoice.to_addressline_2"
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
                v-model="completed_invoice.to_city"
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
                v-model="completed_invoice.to_postcode"
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
                v-model="completed_invoice.to_phone"
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
                v-model="completed_invoice.to_vat"
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
                v-model="completed_invoice.ref"
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
            v-model="completed_invoice.date"
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
          <md-datepicker class="md-layout-item" v-model="completed_invoice.due" md-immediately/>
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

      <md-table-row v-for="item in invoice_item.rowData" :key="item.serial">
        <md-table-cell numeric>{{item.serial}}</md-table-cell>
        <md-table-cell>{{item.description}}</md-table-cell>
        <md-table-cell>{{item.date | prettyDate}}</md-table-cell>
        <md-table-cell>{{item.quantity}}</md-table-cell>
        <md-table-cell>{{item.price}}</md-table-cell>
        <md-table-cell>{{item.discount}}</md-table-cell>
        <md-table-cell>{{item.tax}}</md-table-cell>
        <md-table-cell>{{item.total | money}}</md-table-cell>
        <md-button class="md-just-icon md-round md-danger" @click="removeItem()">
          <md-icon>close</md-icon>
        </md-button>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>{{this.rowCounter+1}}</md-table-cell>
        <md-table-cell>
          <md-field>
            <md-input v-model="invoice_item.description" type="text"></md-input>
          </md-field>
        </md-table-cell>

        <md-table-cell>
          <md-datepicker class="md-layout-item" v-model="invoice_item.date" md-immediately/>
        </md-table-cell>

        <md-table-cell>
          <md-field>
            <md-input
              v-model="invoice_item.quantity"
              data-vv-name="number"
              type="number"
              v-validate="modelValidations.number"
            ></md-input>
          </md-field>
        </md-table-cell>
        <md-table-cell>
          <md-field>
            <md-input
              v-model="invoice_item.price"
              data-vv-name="number"
              type="number"
              v-validate="modelValidations.number"
            ></md-input>
          </md-field>
        </md-table-cell>
        <md-table-cell>
          <md-field>
            <md-input
              v-model="invoice_item.discount"
              data-vv-name="range"
              type="text"
              v-validate="modelValidations.range"
            ></md-input>
          </md-field>
        </md-table-cell>
        <md-table-cell>
          <md-field>
            <md-input
              v-model="invoice_item.tax"
              data-vv-name="range"
              type="text"
              v-validate="modelValidations.range"
            ></md-input>
          </md-field>
        </md-table-cell>
        <md-table-cell>{{invoice_item.total | money}}</md-table-cell>
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
                v-model="completed_invoice.payment_account_name"
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
              <md-input v-model="completed_invoice.payment_account_sortcode"></md-input>
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
                v-model="completed_invoice.payment_account_number"
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
                v-model="completed_invoice.invoice_notes"
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
      completed_invoice: {
        ref: "",
        datum: "",
        rechnungNr: "",
        uidNr: "",
        bankName: "",
        bic: "",
        iban: "",
        an_name: "",
        an_company: "",
        an_company_address: "",
        an_company_postcode: "",
        an_company_city: "",
        an_company_state: "",
        rechnungsersteller: "",
        zahlungsform: "",
        rechnung_datum: "",
        zahlungsziel: "",
        tax: "",
        total: "",
        items: []
      },
      invoice_item: {
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
      invoice_id: null,
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
      this.invoice_item.rowData.pop();
    },
    validate() {
      this.$validator.validateAll().then(isValid => {
        console.log("is valid on validate() function");
        // this.$emit("on-submit", this.registerForm, isValid);
      });
    },
    async generateInvoice() {
      console.log("generating invoice");
      //ose ktu, me for loop
      // this.$validator.validate().then(valid => {
      // if (!valid) {
      // make notification appear here
      // console.log("not valid")
      // }else{
      // console.log("valid form trying to go to the rest of the code")

      // let invoice_grand_total = 0;
      // let invoice_discount = 0;
      // let invoice_tax = 0;
      // let invoice_sub_total = 0;
      // for (let item of this.invoice_item.rowData) {
      //   let item_price = parseFloat(item.quantity) * parseFloat(item.price);
      //   let item_discount_amount =
      //     item_price * (parseFloat(item.discount) / 100);
      //   invoice_discount += item_discount_amount;
      //   let item_tax_amount =
      //     (item_price - item_discount_amount) * (parseFloat(item.tax) / 100);
      //   invoice_tax += item_tax_amount;
      //   invoice_grand_total += parseFloat(item.total);
      // }
      // invoice_sub_total = invoice_grand_total - invoice_discount;
      // this.completed_invoice.grand_total = invoice_grand_total + "";
      // this.completed_invoice.discount = invoice_discount + "";
      // this.completed_invoice.tax = invoice_tax + "";
      // this.completed_invoice.sub_total = invoice_sub_total + "";

      let invoice = {
        ref: this.completed_invoice.ref,
        datum: this.completed_invoice.datum,
        rechnung_nr: this.completed_invoice.rechnungNr,
        uid_nr: this.completed_invoice.uidNr,
        bank_name: this.completed_invoice.bankName,
        bic: this.completed_invoice.bic,
        iban: this.completed_invoice.iban,
        an_name: this.completed_invoice.an_name,
        an_company: this.completed_invoice.an_company,
        an_company_address: this.completed_invoice.an_company_address,
        an_company_postcode: this.completed_invoice.an_company_postcode,
        an_company_city: this.completed_invoice.an_company_city,
        an_company_state: this.completed_invoice.an_company_state,
        rechnungsersteller: this.completed_invoice.rechnungsersteller,
        zahlungsform: this.completed_invoice.zahlungsform,
        rechnung_datum: this.completed_invoice.rechnung_datum,
        zahlungsziel: this.completed_invoice.zahlungsziel,
        tax: this.completed_invoice.tax,
        total: this.completed_invoice.total,
        items: this.invoice_item.rowData
      }
      await this.$store.dispatch(CREATE_ADMIN_INVOICE, {
        reservationId: this.$route.params.id,
        invoice: invoice
      });

      //Then go to the page
      console.log("Updated invoice.");
      this.$router.push({
        name: "InvoiceDetail",
        params: {
          id: this.getAdminInvoice.id
        }
      });

      // }
      // });
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

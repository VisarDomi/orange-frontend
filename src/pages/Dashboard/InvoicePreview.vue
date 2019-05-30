<template>
  <div class="content-wrapper">
    <div class="md-layout" style="margin-bottom:50px;">
      <div class="md-layout-item">
        <md-button class="md-success" @click="exportPDF()">Generate PDF</md-button>
      </div>
    </div>

    <!-- Row start -->
    <div class="row gutters generate">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div class="card">
          <div class="card-body p-0">
            <div class="invoice-container">
              <div class="invoice-header">
                <!-- Row start -->
                <div class="row gutters">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="invoice-logo">
                      <span class="text-warning">Orange Limo</span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="btn-group float-right">
                      <!-- <a href="#" class="btn btn-outline-danger btn-sm ml-2">
															<i class="icon-printer"></i> Print
                      </a>-->
                    </div>
                  </div>
                </div>
                <!-- Row end -->
              </div>

              <div class="invoice-address">
                <!-- Row start -->
                <div class="row gutters">
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <small>From,</small>
                    <br>
                    <br>
                    <h6>{{invoice.from_business_name}}</h6>
                    <address>
                      {{invoice.from_addressline_1}}
                      <br>{{invoice.from_addressline_2}}
                      <br>{{invoice.from_city}}, {{invoice.from_postcode}}
                      <br>Phone: {{invoice.from_phone}}
                      <br>VAT: {{invoice.from_vat}}
                    </address>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <small>To,</small>
                    <br>
                    <br>
                    <h6>{{invoice.to_client_name}}</h6>
                    <address>
                      {{invoice.to_addressline_1}}
                      <br>{{invoice.to_addressline_2}}
                      <br>{{invoice.to_city}}, {{invoice.to_postcode}}
                      <br>Phone: {{invoice.to_phone}}
                      <br>VAT: {{invoice.to_vat}}
                    </address>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="invoice-details">
                      <small>
                        Invoice No -
                        <span class="badge badge-info">#{{invoice.ref}}</span>
                      </small>
                      <br>
                      <small>Sent - {{invoice.date | prettyDate}}</small>
                      <br>
                      <small>Due - {{invoice.due | prettyDate}}</small>
                      <br>
                    </div>
                  </div>
                </div>
                <!-- Row end -->
              </div>

              <div class="invoice-body" style="padding: 3rem 1.5rem 0rem 1.5rem;">
                <!-- Row start -->

                <div class="row gutters">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <p>
                      <b>Hello, {{invoice.to_client_name}}</b>
                    </p>
                    <p>{{invoice.invoice_notes}}</p>
                    <br>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6"></div>
                </div>
                <!-- Row end -->

                <!-- Row start -->
                <div class="row gutters">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Items</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Discount (%)</th>
                            <th>Tax (%)</th>
                            <th style="text-align: right;">Sub Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in invoice.items" :key='item.id'>
                            <td>
                              {{item.description}}
                              <!-- <p class="m-0 text-muted">
                                <small>Reference site about Lorem Ipsum, giving information on its origins</small>
                              </p> -->
                            </td>
                            <td>{{item.date | prettyDate}}</td>
                            <td>{{item.quantity}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.discount}}</td>
                            <td>{{item.tax}}</td>
                            <td style="text-align: right;">{{parseFloat(item.total) | money}}</td>
                          </tr>


                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- Row end -->

                <!-- Row start -->


                <div class="invoice-payment" style="padding: 0 0 0 1.5rem;">
                  <div class="row gutters">
                    <div class="col-lg-6 col-md-6 col-sm-12">

                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-12" style="    background-color: #E9EFF5 !important;">

                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 order-last" style="padding-left: 0;">
                      <table class="table no-border m-0" style="height: 100%;">
                        <tbody>
                          <tr>
                            <td>
                              <p>
                                Subtotal
                                <br>Tax
                                <br>Discount
                                <br>
                              </p>
                              <h5 class="text-danger">
                                <strong>Grand Total</strong>
                              </h5>
                            </td>
                            <td>
                              <p>
                                {{this.invoice_subtotal | money}}
                                <br>{{this.invoice_tax | money}}
                                <br>{{this.invoice_discount | money}}
                                <br>
                              </p>
                              <h5 class="text-danger">
                                <strong>{{this.grand_total | money}}</strong>
                              </h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- Row end -->
              </div>

              
                <div class="invoice-body" style="padding: 3rem 1.5rem 0rem;">

                
                <div class="row" style="     padding-bottom: 1rem;">
                  <div class="col-lg-6 col-md-6 col-sm-12" style="    margin-left: 15px;
    padding-right: 0px;
    padding-left: 0px;">
                      <table class="table no-border m-0">
                        <tbody>
                          <tr>
                            <td style="text-align: left;">
                              <h5 class="text-danger">
                                <strong>Payment details</strong>
                                <p>&nbsp;</p>
                                <p>Account Name: </p>
                                <p>Sort Code: </p>
                                <p>Account Number: </p>
                              </h5>
                            </td>
                            <td style="text-align: left;">
                              <br>
                              <br>
                              <p>{{invoice.payment_account_name}}</p>
                              <p>{{invoice.payment_account_sortcode}}</p>
                              <p>{{invoice.payment_account_number}}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12" >

                  </div>
                </div>
</div>
                



                <div class="invoice-footer">
											Thank you for your Business.
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Row end -->
  </div>
</template>

<script>
import * as html2pdf from "html2pdf.js";
import { GET_INVOICE } from "@/store/actions.type";
import { mapGetters } from "vuex";
// const moment = require('moment');

export default {
  name: "InvoicePreview",
  data(){
    return {
      invoice_subtotal: "",
      invoice_tax: "",
      invoice_discount: "",
      grand_total: ""

    }

  },
  components: {},
  methods: {
    exportPDF() {
      const element = document.querySelector(".generate");
      const opt = {
        margin: 8,
        filename: "invoice.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 }
      };

      html2pdf()
        .from(element)
        .set(opt)
        .save();
    }
  },
  created(){
    this.$store.dispatch(GET_INVOICE, {invoiceId: this.invoice.id}).then(() => {//Then go to the page
          console.log("Invoice recieved")
          this.invoice_subtotal = 0;
          this.invoice_tax = 0;
          this.grand_total = 0;
          this.invoice_discount = 0;
          for(var item of this.invoice.items){



            
            
            var calculated_item_total = parseFloat(item.quantity) * parseFloat(item.price) //just price of item
            console.log("price of this item, withou tax and discouont: ", calculated_item_total)
            this.invoice_discount = this.invoice_discount + (parseFloat(item.discount)/100) * calculated_item_total //the discount for this item added to total discount
            console.log("Discount so far for all items: ", this.invoice_discount)
            calculated_item_total = calculated_item_total - (parseFloat(item.discount)/100) * calculated_item_total//minus discount
            console.log("price of this item removing the discount ", calculated_item_total)
            var item_tax = (parseFloat(item.tax)/100) * calculated_item_total
            calculated_item_total = calculated_item_total + item_tax// add tax to price
            console.log("price of this item with tax added ", calculated_item_total)
            this.invoice_tax  = this.invoice_tax + item_tax //tax for this item added to total tax
            console.log("tax so far for all items: ", this.invoice_tax)
            this.invoice_subtotal = this.invoice_subtotal + calculated_item_total; //this is the total price after discount and tax

            this.grand_total = this.grand_total + this.invoice_tax + this.invoice_subtotal - this.invoice_discount;
            



            console.log("items after dispatching get invoice on created:", item)
          }
        });
  },
  computed: {
    ...mapGetters(["invoice"])
  }
};
</script>

<style scoped src="@/assets/css/bootstrap.min.css">
</style>

<style scoped src="@/assets/css/invoice.css">
</style>

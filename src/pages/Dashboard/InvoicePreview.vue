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
                    <h6>{{from_business_name}}</h6>
                    <address>
                      {{from_addressline_1}}
                      <br>{{from_addressline_2}}
                      <br>{{from_city}}, {{from_postcode}}
                      <br>Phone: {{from_phone}}
                      <br>VAT: U23098430
                    </address>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <small>To,</small>
                    <br>
                    <br>
                    <h6>{{to_client_name}}</h6>
                    <address>
                      {{to_addressline_1}}
                      <br>{{to_addressline_2}}
                      <br>{{to_city}}, {{to_postcode}}
                      <br>Phone: {{to_phone}}
                      <br>VAT: U93847503
                    </address>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="invoice-details">
                      <small>
                        Invoice No -
                        <span class="badge badge-info">#{{invoice_ref}}</span>
                      </small>
                      <br>
                      <small>Sent - {{invoice_date | prettyDate}}</small>
                      <br>
                      <small>Due - {{invoice_due | prettyDate}}</small>
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
                      <b>Hello, {{to_client_name}}</b>
                    </p>
                    <p>Thank you for riding with us and for your order.</p>
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
                            <th style="text-align: right;">Sub Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              {{items[0].description}}
                              <!-- <p class="m-0 text-muted">
                                <small>Reference site about Lorem Ipsum, giving information on its origins</small>
                              </p> -->
                            </td>
                            <td>{{invoice_date | prettyDate}}</td>
                            <td>{{items[0].quantity}}</td>
                            <td style="text-align: right;">{{items[0].price | money}}</td>
                          </tr>
                          <tr>
                            <td>
                              {{items[1].description}}
                              <!-- <p class="m-0 text-muted">
                                <small>Reference site about Lorem Ipsum, giving information on its origins</small>
                              </p> -->
                            </td>
                            <td>{{invoice_due | prettyDate}}</td>
                            <td>{{items[1].quantity}}</td>
                            <td style="text-align: right;">{{items[1].price | money}}</td>

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
                                <br>
                              </p>
                              <h5 class="text-danger">
                                <strong>Grand Total</strong>
                              </h5>
                            </td>
                            <td>
                              <p>
                                $1170.00
                                <br>$50.00
                                <br>
                              </p>
                              <h5 class="text-danger">
                                <strong>$1250.00</strong>
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
                              <p>{{payment_account_name}}</p>
                              <p>{{payment_account_shortcode}}</p>
                              <p>{{payment_account_number}}</p>
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

// const moment = require('moment');

export default {
  name: "InvoicePreview",
  data(){
    return{
      invoice_id: 1, 
      from_business_name: "Orange Limo",
      from_addressline_1: "Viale Druso 299/B",
      from_addressline_2: "Rr. Limozinave, Pll1/34B",
      from_city: "Bolzano, BZ", 
      from_postcode: "39100",
      from_phone: "+304975034",
      to_client_name: "Johnnie Walker", 
      to_addressline_1: "Whiskey Str. 34/A",
      to_addressline_2: "",
      to_city: "Winsconsin",
      to_postcode: "43034",
      to_phone: "+8593023498",
      invoice_ref: "3043",
      invoice_date: "12/31/2012",
      invoice_due: "11/11/2012",
      items:[
        {
          id: 1, 
          description: "Limo ride to airport",
          quantity: 2, 
          price: 2300.50, 
          discount: 10,
          tax: 5,
          total: 2100
        },
        {
          id: 2, 
          description: "Redbull on demand",
          quantity: 23, 
          price:450.78, 
          discount: 0,
          tax: 15,
          total: 523.40
        }
      ],
      payment_account_name: "Orange Bank",
      payment_account_shortcode: "WF3043I234",
      payment_account_number: "2304734953",
      invoice_notes: "Thank you for your business."
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
  }
};
</script>

<style scoped src="@/assets/css/bootstrap.min.css">
</style>

<style scoped src="@/assets/css/invoice.css">
</style>

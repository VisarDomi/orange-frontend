<template>
<div class="content-wrapper">
<div class="md-layout" style="margin-bottom:50px;">
	<div class="md-layout-item ">
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
														</a> -->
													</div>
												</div>
											</div>
											<!-- Row end -->
										</div>

										<div class="invoice-address">
											<!-- Row start -->
											<div class="row gutters">
												<div class="col-lg-4 col-md-4 col-sm-4">
													<small>From,</small><br><br>
													<h6>Nathan</h6>
													<address>
														Street Address<br>
														City, Zip Code<br>
														Phone: 000-000-0000
													</address>
												</div>
												<div class="col-lg-4 col-md-4 col-sm-4">
													<small>To,</small><br><br>
													<h6>Florida</h6>
													<address>
														Street Address<br>
														City, Zip Code<br>
														Phone: 000-000-0000
													</address>
												</div>
												<div class="col-lg-4 col-md-4 col-sm-4">
													<div class="invoice-details">
														<small>Invoice No - <span class="badge badge-info">#00099</span></small><br>
														<small>Sent - March 35th 2019</small><br>
														<small>Due - April 20th 2019</small><br>
													</div>
												</div>
											</div>
											<!-- Row end -->
										</div>

										<div class="invoice-body">

											<!-- Row start -->
											<div class="row gutters">
												<div class="col-lg-6 col-md-6 col-sm-6">
													<p><b>Hello, James</b></p>
													<p>Thank you for riding with us and for your order.</p>
												</div>
												<div class="col-lg-6 col-md-6 col-sm-6">
													
												</div>
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
																	<th>Product ID</th>
																	<th>Quantity</th>
																	<th>Sub Total</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		Limo Ride to Airport
																		<p class="m-0 text-muted">
																			<small>Reference site about Lorem Ipsum, giving information on its origins</small>
																		</p>
																	</td>
																	<td>#50000879</td>
																	<td>2</td>
																	<td>$1150.00</td>
																</tr>
																<tr>
																	<td>
																		Refreshing drinks
																		<p class="m-0 text-muted">
																			<small>As well as a random Lipsum generator.</small>
																		</p>
																	</td>
																	<td>#50000871</td>
																	<td>3</td>
																	<td>$50.00</td>
																</tr>
																<tr>
																	<td>
																		Environment tax
																		<p class="m-0 text-muted">
																			<small>Lorem ipsum has become the industry standard.</small>
																		</p>
																	</td>
																	<td>#50000665</td>
																	<td>2</td>
																	<td>$49.99</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
											<!-- Row end -->

											<!-- Row start -->
											<div class="invoice-payment">
												<div class="row gutters">
													<div class="col-lg-6 col-md-6 col-sm-12">
													</div>
													<div class="col-lg-6 col-md-6 col-sm-12 order-last">
														<table class="table no-border m-0">
															<tbody>
																<tr>
																	<td>
																		<p>
																			Subtotal<br>
																			Shipping &amp; Handling<br>
																			Tax<br>
																		</p>
																		<h5 class="text-danger"><strong>Grand Total</strong></h5>
																	</td>
																	<td>
																		<p>
																			$1170.00<br>
																			$30.00<br>
																			$50.00<br>
																		</p>
																		<h5 class="text-danger"><strong>$1250.00</strong></h5>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
											<!-- Row end -->

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
import Datepicker from 'vuejs-datepicker';
import * as html2pdf from 'html2pdf.js';

// const moment = require('moment');

export default {
  name: "CompanyInvoicePreview",
  components: {
  },
  methods: {
    exportPDF() {
      const element = document.querySelector('.generate');
      const opt = {
        margin: 8,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
      };

      html2pdf().from(element).set(opt).save();
    },
  }
};
</script>

<style scoped src="@/assets/css/bootstrap.min.css">
</style>

<style scoped src="@/assets/css/invoice.css">
  
</style>



// WEBPACK FOOTER //
// src/components/Invoice.vue
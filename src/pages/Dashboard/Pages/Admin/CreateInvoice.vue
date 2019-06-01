<template>
  <form class="md-layout">
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
            <md-field
              :class="[
                { 'md-error': errors.has('required') },
                { 'md-valid': !errors.has('required') && touched.required }
              ]"
            >
              <md-input
                v-model="completed_invoice.from_business_name"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
                placeholder="Orange Limo"
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('required')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('required') && touched.required">done</md-icon>
              </slide-y-down-transition>
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
            <md-field
              :class="[
                { 'md-error': errors.has('required') },
                { 'md-valid': !errors.has('required') && touched.required }
              ]"
            >
              <md-input
                v-model="completed_invoice.from_city"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('required')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('required') && touched.required">done</md-icon>
              </slide-y-down-transition>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Zip code</label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-error': errors.has('number') },
                { 'md-valid': !errors.has('number') && touched.number }
              ]"
            >
              <md-input
                v-model="completed_invoice.from_postcode"
                data-vv-name="number"
                type="number"
                v-validate="modelValidations.number"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('number')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('number') && touched.number">done</md-icon>
              </slide-y-down-transition>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>numeric</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Phone</label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-error': errors.has('required') },
                { 'md-valid': !errors.has('required') && touched.required }
              ]"
            >
              <md-input
                v-model="completed_invoice.from_phone"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('required')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('required') && touched.required">done</md-icon>
              </slide-y-down-transition>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">VAT</label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-error': errors.has('required') },
                { 'md-valid': !errors.has('required') && touched.required }
              ]"
            >
              <md-input
                v-model="completed_invoice.from_vat"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('required')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('required') && touched.required">done</md-icon>
              </slide-y-down-transition>
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
            <md-field
              :class="[
                  { 'md-error': errors.has('required') },
                  { 'md-valid': !errors.has('required') && touched.required }
                ]"
            >
              <md-input
                v-model="completed_invoice.to_client_name"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('required')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('required') && touched.required">done</md-icon>
              </slide-y-down-transition>
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
            <md-field
              :class="[
                  { 'md-error': errors.has('required') },
                  { 'md-valid': !errors.has('required') && touched.required }
                ]"
            >
              <md-input
                v-model="completed_invoice.to_city"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('required')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('required') && touched.required">done</md-icon>
              </slide-y-down-transition>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
              <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Zip code</label>
          <div class="md-layout-item">
            <md-field
              :class="[
                  { 'md-error': errors.has('number') },
                  { 'md-valid': !errors.has('number') && touched.number }
                ]"
            >
              <md-input
                v-model="completed_invoice.to_postcode"
                data-vv-name="number"
                type="number"
                v-validate="modelValidations.number"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('number')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('number') && touched.number">done</md-icon>
              </slide-y-down-transition>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
              <code>numeric</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Phone</label>
          <div class="md-layout-item">
            <md-field
              :class="[
                  { 'md-error': errors.has('required') },
                  { 'md-valid': !errors.has('required') && touched.required }
                ]"
            >
              <md-input
                v-model="completed_invoice.to_phone"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('required')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('required') && touched.required">done</md-icon>
              </slide-y-down-transition>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
              <code>required</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">VAT</label>
          <div class="md-layout-item">
            <md-field
              :class="[
                  { 'md-error': errors.has('required') },
                  { 'md-valid': !errors.has('required') && touched.required }
                ]"
            >
              <md-input
                v-model="completed_invoice.to_vat"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('required')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('required') && touched.required">done</md-icon>
              </slide-y-down-transition>
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
            <md-field
              :class="[
                { 'md-error': errors.has('number') },
                { 'md-valid': !errors.has('number') && touched.number }
              ]"
            >
              <md-input
                v-model="completed_invoice.ref"
                data-vv-name="number"
                type="number"
                v-validate="modelValidations.number"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('number')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('number') && touched.number">done</md-icon>
              </slide-y-down-transition>
            </md-field>
          </div>
          <!-- <label class="md-layout-item md-size-20 md-label-on-right">
            <code>numeric</code>
          </label>-->
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Invoice Date</label>
          <md-datepicker class="md-layout-item" v-model="completed_invoice.date" md-immediately/>
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
          <md-field
            :class="[
                { 'md-error': errors.has('required') },
                { 'md-valid': !errors.has('required') && touched.required }
              ]"
          >
            <md-input
              v-model="invoice_item.description"
              data-vv-name="required"
              type="text"
              v-validate="modelValidations.required"
              required
            ></md-input>
            <slide-y-down-transition>
              <md-icon class="error" v-show="errors.has('required')">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="!errors.has('required') && touched.required">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </md-table-cell>

        <md-table-cell>
          <md-datepicker class="md-layout-item" v-model="invoice_item.date" md-immediately/>
        </md-table-cell>

        <md-table-cell>
          <md-field
            :class="[
                { 'md-error': errors.has('number') },
                { 'md-valid': !errors.has('number') && touched.number }
              ]"
          >
            <md-input
              v-model="invoice_item.quantity"
              data-vv-name="number"
              type="number"
              v-validate="modelValidations.number"
              required
            ></md-input>
            <slide-y-down-transition>
              <md-icon class="error" v-show="errors.has('number')">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="!errors.has('number') && touched.number">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </md-table-cell>
        <md-table-cell>
          <md-field
            :class="[
                { 'md-error': errors.has('number') },
                { 'md-valid': !errors.has('number') && touched.number }
              ]"
          >
            <md-input
              v-model="invoice_item.price"
              data-vv-name="number"
              type="number"
              v-validate="modelValidations.number"
              required
            ></md-input>
            <slide-y-down-transition>
              <md-icon class="error" v-show="errors.has('number')">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="!errors.has('number') && touched.number">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </md-table-cell>
        <md-table-cell>
          <md-field
            :class="[
                { 'md-valid': !errors.has('range') && touched.range },
                { 'md-error': errors.has('range') }
              ]"
          >
            <md-input
              v-model="invoice_item.discount"
              data-vv-name="range"
              type="text"
              required
              v-validate="modelValidations.range"
            ></md-input>
            <slide-y-down-transition>
              <md-icon class="error" v-show="errors.has('range')">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="!errors.has('range') && touched.range">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </md-table-cell>
        <md-table-cell>
          <md-field
            :class="[
                { 'md-valid': !errors.has('range') && touched.range },
                { 'md-error': errors.has('range') }
              ]"
          >
            <md-input
              v-model="invoice_item.tax"
              data-vv-name="range"
              type="text"
              required
              v-validate="modelValidations.range"
            ></md-input>
            <slide-y-down-transition>
              <md-icon class="error" v-show="errors.has('range')">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="!errors.has('range') && touched.range">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </md-table-cell>
        <md-table-cell>{{invoice_item.total | money}}</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-round md-success" @click="addItem()">
            <md-icon>add</md-icon>
          </md-button>
&nbsp;
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
            <md-field
              :class="[
                { 'md-error': errors.has('required') },
                { 'md-valid': !errors.has('required') && touched.required }
              ]"
            >
              <md-input
                v-model="completed_invoice.payment_account_name"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('required')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('required') && touched.required">done</md-icon>
              </slide-y-down-transition>
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
            <md-field
              :class="[
                { 'md-error': errors.has('number') },
                { 'md-valid': !errors.has('number') && touched.number }
              ]"
            >
              <md-input
                v-model="completed_invoice.payment_account_number"
                data-vv-name="number"
                type="number"
                v-validate="modelValidations.number"
                required
              ></md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('number')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon class="success" v-show="!errors.has('number') && touched.number">done</md-icon>
              </slide-y-down-transition>
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
      <md-button class="md-warning md-lg" @click="generateInvoice()">Generate Invoice</md-button>
    </div>
  </form>
</template>
<script>
import { SlideYDownTransition } from "vue2-transitions";
import { UPDATE_INVOICE } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "CreateInvoice",
  components: {
    SlideYDownTransition
  },
  data() {
    return {
      completed_invoice: {
        from_business_name: "",
        from_addressline_1: "",
        from_addressline_2: "",
        from_city: "",
        from_postcode: "",
        from_phone: "",
        from_vat: "",
        to_client_name: "",
        to_addressline_1: "",
        to_addressline_2: "",
        to_city: "",
        to_postcode: "",
        to_phone: "",
        to_vat: "",
        ref: "",
        date: "",
        due: "",
        payment_account_name: "",
        payment_account_sortcode: "",
        payment_account_number: "",
        invoice_notes: "",
        discount: "",
        sub_total: "",
        tax: "",
        grand_total: ""
      },
      invoice_id: null,
      invoice_item: {
        serial: "",
        description: "",
        date: "",
        quantity: "",
        price: "",
        discount: "",
        tax: "",
        total: "",
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
      this.invoice_item.rowData.pop();
    },
    validate() {
      this.$validator.validateAll().then(isValid => {
        this.$emit("on-submit", this.registerForm, isValid);
      });
    },
    generateInvoice() {
      //ose ktu, me for loop

      let invoice_grand_total = 0;
      let invoice_discount = 0;
      let invoice_tax = 0;
      let invoice_sub_total = 0;
      for (let item of this.invoice_item.rowData) {
        let item_price = parseFloat(item.quantity) * parseFloat(item.price);
        let item_discount_amount =
          item_price * (parseFloat(item.discount) / 100);
        invoice_discount += item_discount_amount;

        let item_tax_amount =
          (item_price - item_discount_amount) * (parseFloat(item.tax) / 100);
        invoice_tax += item_tax_amount;
        invoice_grand_total += parseFloat(item.total);
      }
      invoice_sub_total = invoice_grand_total - invoice_discount;

      this.completed_invoice.grand_total = invoice_grand_total + "";
      this.completed_invoice.discount = invoice_discount + "";
      this.completed_invoice.tax = invoice_tax + "";
      this.completed_invoice.sub_total = invoice_sub_total + "";

      this.$store
        .dispatch(UPDATE_INVOICE, {
          reservationId: this.adminInvoice.reservation_id,
          invoiceId: this.adminInvoice.id,
          invoice: this.completed_invoice,
          items: this.invoice_item.rowData
        })
        .then(() => {
          //Then go to the page
          console.log("Updated invoice.");
          this.$router.push({ name: "InvoiceDetail" });
        });
    }
  },
  computed: {
    ...mapGetters(["adminInvoice"])
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

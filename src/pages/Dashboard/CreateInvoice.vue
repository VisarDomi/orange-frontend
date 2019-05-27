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
                v-model="required"
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
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Address Line 1</label>
          <div class="md-layout-item">
            <md-field>
              <label>Address</label>
              <md-input v-model="placeholder" placeholder="Write the primary address"></md-input>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>optional</code>
          </label>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Address Line 2</label>
          <div class="md-layout-item">
            <md-field>
              <label>Address</label>
              <md-input v-model="placeholder" placeholder="Write the secondary address"></md-input>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>optional</code>
          </label>
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
                v-model="required"
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
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>
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
                v-model="number"
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
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>numeric</code>
          </label>
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
                v-model="required"
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
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Address Line 1</label>
          <div class="md-layout-item">
            <md-field>
              <label>Address</label>
              <md-input v-model="placeholder" placeholder="Write the primary address"></md-input>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>optional</code>
          </label>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Address Line 2</label>
          <div class="md-layout-item">
            <md-field>
              <label>Address</label>
              <md-input v-model="placeholder" placeholder="Write the secondary address"></md-input>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>optional</code>
          </label>
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
                v-model="required"
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
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>
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
                v-model="number"
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
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>numeric</code>
          </label>
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
                v-model="number"
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
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>numeric</code>
          </label>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Invoice Date</label>
          <md-datepicker class="md-layout-item" v-model="selectedClose" md-immediately/>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Invoice Due</label>
          <md-datepicker class="md-layout-item" v-model="selectedClose" md-immediately/>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>
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
        <md-table-head>Quantity</md-table-head>
        <md-table-head>Price</md-table-head>
        <md-table-head>Discount %</md-table-head>
        <md-table-head>Tax %</md-table-head>
        <md-table-head>Total</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>1</md-table-cell>
        <md-table-cell>
          <md-field
            :class="[
                { 'md-error': errors.has('required') },
                { 'md-valid': !errors.has('required') && touched.required }
              ]"
          >
            <md-input
              v-model="required"
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
          <md-field
            :class="[
                { 'md-error': errors.has('number') },
                { 'md-valid': !errors.has('number') && touched.number }
              ]"
          >
            <md-input
              v-model="number"
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
              v-model="number"
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
              v-model="range"
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
              v-model="range"
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
        <md-table-cell>$1,760</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-round md-success">
            <md-icon>add</md-icon>
          </md-button>&nbsp;
          <md-button class="md-just-icon md-round md-danger">
            <md-icon>close</md-icon>
          </md-button>
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
                v-model="required"
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
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">Account sortcode</label>
          <div class="md-layout-item">
            <md-field>
              <label>Address</label>
              <md-input v-model="placeholder" placeholder="Write the primary address"></md-input>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>optional</code>
          </label>
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
                v-model="number"
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
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>numeric</code>
          </label>
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
                    <md-textarea v-model="textarea" placeholder="Thank you for your business."></md-textarea>
                </md-field>
          </div>

        </div>

      </md-card-content>
    </md-card>



    <div class="md-layout-item md-size-100 mx-auto " style="text-align:center;">

        <md-button class="md-warning md-lg" @click="generateInvoice()">Generate Invoice</md-button>
    </div>


  </form>
</template>
<script>
import { SlideYDownTransition } from "vue2-transitions";
export default {
  name: "CreateInvoice",
  components: {
    SlideYDownTransition
  },
  data() {
    return {
    textarea: "",
      range: "",
      required: "",
      number: "",
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
    validate() {
      this.$validator.validateAll().then(isValid => {
        this.$emit("on-submit", this.registerForm, isValid);
      });
    },
    generateInvoice(){

    }
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

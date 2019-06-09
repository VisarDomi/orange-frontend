<template>
  <div>
    <h5 class="info-text">Tell us about your journey</h5>
    <div class="md-layout">
      <div class="md-layout-item md-size-60 mx-auto md-small-size-100">
        <md-field
          :class="[
            { 'md-valid': !errors.has('destination') && touched.destination },
            { 'md-form-group': true },
            { 'md-error': errors.has('destination') }
          ]"
        >
          <md-icon>directions</md-icon>
          <label>Where are you travelling to?</label>
          <md-input
            v-model="destination"
            data-vv-name="destination"
            type="text"
            name="destination"
            required
            v-validate="modelValidations.destination"
          ></md-input>
          <slide-y-down-transition>
            <md-icon class="error" v-show="errors.has('destination')">close</md-icon>
          </slide-y-down-transition>
          <slide-y-down-transition>
            <md-icon class="success" v-show="!errors.has('destination') && touched.destination">done</md-icon>
          </slide-y-down-transition>
        </md-field>

        <md-field
          :class="[
            { 'md-valid': !errors.has('selectedEmployees') && touched.selectedEmployees },
            { 'md-form-group': true },
            { 'md-error': errors.has('selectedEmployees') }
          ]"
        >
          <md-icon>face</md-icon>
          <label>Select employees</label>
          <md-select
            v-model="selectedEmployees"
            data-vv-name="selectedEmployees"
            name="employees"
            id="employees"
            required
            md-dense
            multiple
            v-validate="modelValidations.selectedEmployees"
          >
            <!-- vue will complain about value holding an object, but its just a warning -->
            <md-option
              v-for="employee in this.employees"
              :value="employee.id"
              :key="employee.id"
            >{{employee.full_name}}</md-option>
          </md-select>

          <slide-y-down-transition>
            <md-icon class="error" v-show="errors.has('selectedEmployees')">close</md-icon>
          </slide-y-down-transition>
          <slide-y-down-transition>
            <md-icon
              class="success"
              v-show="!errors.has('selectedEmployees') && touched.selectedEmployees"
            >done</md-icon>
          </slide-y-down-transition>
        </md-field>

        <md-field
          v-for="(stop,index) in stops.rowData"
          :key="stop.employeeId"
          class="md-form-group"
        >
          <md-icon>face</md-icon>
          <label>Pickup address for {{stop.full_name}}</label>
          <md-input v-model="stops.rowData[index].pickup" type="text" required></md-input>
        </md-field>

        <md-field
          :class="[
            { 'md-valid': !errors.has('code') && touched.code },
            { 'md-form-group': true },
            { 'md-error': errors.has('code') }
          ]"
        >
          <md-icon>business</md-icon>
          <label>What is your company KST?</label>
          <md-input
            v-model="code"
            data-vv-name="code"
            type="text"
            name="code"
            required
            v-validate="modelValidations.code"
          ></md-input>
          <slide-y-down-transition>
            <md-icon class="error" v-show="errors.has('code')">close</md-icon>
          </slide-y-down-transition>
          <slide-y-down-transition>
            <md-icon class="success" v-show="!errors.has('code') && touched.code">done</md-icon>
          </slide-y-down-transition>
        </md-field>
      </div>

      <div class="md-layout-item md-size-60 mx-auto md-small-size-100">
        <div class="md-layout">
          <md-icon>date_range</md-icon>
          <label
            class="md-layout-item md-size-30 md-form-label"
            style="text-align:left; padding-left:13px; padding-top:33px;"
          >When is the journey?</label>
          <md-field
            class="md-layout-item"
            style="padding-right: 30px;"
            :class="[
                  { 'md-valid': !errors.has('date') && touched.date },
                  { 'md-form-group': true },
                  { 'md-error': errors.has('date') }
                ]"
          >
            <md-datepicker
              v-model="date"
              md-immediately
              style="padding-left: 0px;"
              data-vv-name="date"
              name="date"
              id="date"
              required
              md-dense
              multiple
              v-validate="modelValidations.date"
            />
            <slide-y-down-transition>
              <md-icon class="error" v-show="errors.has('date')">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="!errors.has('date') && touched.date">done</md-icon>
            </slide-y-down-transition>
          </md-field>

          <div class="md-layout">
            <label class="md-layout-item md-size-33 md-form-label" style="text-align:left;">
              <md-icon style="color:black;">access_time</md-icon>&nbsp;&nbsp;&nbsp;&nbsp;Reservation Time
            </label>
            <div class="md-layout-item md-size-33">
              <md-field
                class="md-size-15"
                :class="[
            { 'md-valid': !errors.has('hour') && touched.hour },
            { 'md-form-group': true },
            { 'md-error': errors.has('hour') }
          ]"
              >
                <label>Hour</label>
                <md-select
                  v-model="hour"
                  name="hour"
                  id="hour"
                  md-dense
                  required
                  v-validate="modelValidations.hour"
                >
                  <md-option value="1">1</md-option>
                  <md-option value="2">2</md-option>
                  <md-option value="3">3</md-option>
                  <md-option value="4">4</md-option>
                  <md-option value="5">5</md-option>
                  <md-option value="6">6</md-option>
                  <md-option value="7">7</md-option>
                  <md-option value="8">8</md-option>
                  <md-option value="9">9</md-option>
                  <md-option value="10">10</md-option>
                  <md-option value="1">11</md-option>
                  <md-option value="12">12</md-option>
                  <md-option value="13">13</md-option>
                  <md-option value="14">14</md-option>
                  <md-option value="15">15</md-option>
                  <md-option value="16">16</md-option>
                  <md-option value="17">17</md-option>
                  <md-option value="18">18</md-option>
                  <md-option value="19">19</md-option>
                  <md-option value="20">20</md-option>
                  <md-option value="21">21</md-option>
                  <md-option value="22">22</md-option>
                  <md-option value="23">23</md-option>
                  <md-option value="00">00</md-option>
                </md-select>

                <slide-y-down-transition>
                  <md-icon class="error" v-show="errors.has('hour')">close</md-icon>
                </slide-y-down-transition>
                <slide-y-down-transition>
                  <md-icon class="success" v-show="!errors.has('hour') && touched.hour">done</md-icon>
                </slide-y-down-transition>
              </md-field>
            </div>

            <div class="md-layout-item md-size-33">
              <md-field
                :class="[
                    { 'md-valid': !errors.has('minutes') && touched.minutes },
                    { 'md-form-group': true },
                    { 'md-error': errors.has('minutes') }
                  ]"
              >
                <md-icon></md-icon>
                <label>Minutes</label>
                <md-select
                  v-model="minutes"
                  name="minutes"
                  id="minutes"
                  md-dense
                  required
                  v-validate="modelValidations.minutes"
                >
                  <md-option value="00">00</md-option>
                  <md-option value="05">05</md-option>
                  <md-option value="10">10</md-option>
                  <md-option value="15">15</md-option>
                  <md-option value="20">20</md-option>
                  <md-option value="25">25</md-option>
                  <md-option value="30">30</md-option>
                  <md-option value="35">35</md-option>
                  <md-option value="40">40</md-option>
                  <md-option value="45">45</md-option>
                  <md-option value="50">50</md-option>
                  <md-option value="55">55</md-option>
                </md-select>

                <slide-y-down-transition>
                  <md-icon class="error" v-show="errors.has('minutes')">close</md-icon>
                </slide-y-down-transition>
                <slide-y-down-transition>
                  <md-icon class="success" v-show="!errors.has('minutes') && touched.minutes">done</md-icon>
                </slide-y-down-transition>
              </md-field>
            </div>
          </div>
        </div>

        <!-- luggage -->
        <div class="md-layout">
          <label class="md-layout-item md-size-33 md-form-label" style="text-align:left;">
            <md-icon style="color:black;">work_outline</md-icon>&nbsp;&nbsp;&nbsp;&nbsp;Luggages
          </label>
          <div class="md-layout-item md-size-33">
            <md-field
              class="md-size-15"
              :class="[
            { 'md-valid': !errors.has('smallLuggage') && touched.smallLuggage },
            { 'md-form-group': true },
            { 'md-error': errors.has('smallLuggage') }
          ]"
            >
              <label>Small</label>
              <md-select
                v-model="smallLuggage"
                name="smallLuggage"
                id="smallLuggage"
                md-dense
                required
                v-validate="modelValidations.smallLuggage"
              >
                <md-option value="1">1</md-option>
                <md-option value="2">2</md-option>
                <md-option value="3">3</md-option>
                <md-option value="4">4</md-option>
                <md-option value="5">5</md-option>
                <md-option value="6">6</md-option>
                <md-option value="7">7</md-option>
                <md-option value="8">8</md-option>
                <md-option value="9">9</md-option>
                <md-option value="10">10</md-option>
                <md-option value="11">11</md-option>
                <md-option value="12">12</md-option>
              </md-select>

              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('smallLuggage')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('smallLuggage') && touched.smallLuggage"
                >done</md-icon>
              </slide-y-down-transition>
            </md-field>
          </div>

          <div class="md-layout-item md-size-33">
            <md-field
              :class="[
                    { 'md-valid': !errors.has('bigLuggage') && touched.bigLuggage },
                    { 'md-form-group': true },
                    { 'md-error': errors.has('bigLuggage') }
                  ]"
            >
              <md-icon></md-icon>
              <label>Big</label>
              <md-select
                v-model="bigLuggage"
                name="bigLuggage"
                id="bigLuggage"
                md-dense
                required
                v-validate="modelValidations.bigLuggage"
              >
                <md-option value="1">1</md-option>
                <md-option value="2">2</md-option>
                <md-option value="3">3</md-option>
                <md-option value="4">4</md-option>
                <md-option value="5">5</md-option>
                <md-option value="6">6</md-option>
                <md-option value="7">7</md-option>
                <md-option value="8">8</md-option>
                <md-option value="9">9</md-option>
                <md-option value="10">10</md-option>
                <md-option value="11">11</md-option>
                <md-option value="12">12</md-option>
              </md-select>

              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('bigLuggage')">close</md-icon>
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('bigLuggage') && touched.bigLuggage"
                >done</md-icon>
              </slide-y-down-transition>
            </md-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GET_EMPLOYEES } from "@/store/actions.type";
import { SET_EMPLOYEE_STEP } from "@/store/mutations.type";
import { mapGetters } from "vuex";
import { SlideYDownTransition } from "vue2-transitions";
export default {
  components: {
    SlideYDownTransition
  },
  data() {
    return {
      destination: "",
      selectedEmployees: [],
      stops: {
        employeeId: "",
        date: "",
        time: "",
        address: "",

        rowData: []
      },
      date: "",
      hour: "",
      minutes: "",
      smallLuggage: "",
      bigLuggage: "",
      code: "",
      single: null,
      touched: {
        passangerCount: false,
        selectedEmployees: false,
        date: false,
        hour: false,
        minutes: false,
        code: false
      },
      modelValidations: {
        code: {
          required: true
        },
        smallLuggage: {
          required: true
        },
        bigLuggage: {
          required: true
        },
        hour: {
          required: true
        },
        minutes: {
          required: true
        },
        date: {
          required: true
        },
        destination: {
          required: true
        },
        selectedEmployees: {
          required: true
        }
      }
    };
  },
  methods: {
    //im assuming this can be simplified by turning stops: [], then pushin there directly
    //since i dont think we're using teh stop properties, only the rowData
    addStops() {
      let employeeStops = [];

      //go through array employees, then handpick the ones that have been selected from the dropdown
      //and push them into the row data

      for (let employee of this.employees) {
        for (let selected of this.selectedEmployees) {
          if (employee.id == selected) {
            employeeStops.push({
              employee_id: employee.id,
              pickup: employee.address,
              time: "14:00:00",
              full_name: employee.full_name
            });
          }
        }
      }

      this.stops.rowData = employeeStops;
      console.log("row data is: ", this.stops.rowData);
    },
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    validate() {
      return this.$validator.validateAll().then(res => {
        this.$emit("on-validated", res);
        console.log("res of validate is: ", res);
        if (res == true) {
          let data = {
            code: this.code,
            destination: this.destination,
            employeeIds: this.selectedEmployees,
            stops: this.stops.rowData,
            date: this.date, 
            time: this.hour + ":" + this.minutes + ":00", 
            smallLuggage: this.smallLuggage, 
            bigLuggage: this.bigLuggage
          }
          for(let stop of this.stops.rowData){
            delete stop.full_name
          }

          this.$store.commit(SET_EMPLOYEE_STEP, data);
          return res;
        }
        // return true;//for development speed
        return res;
      });
    }
  },
  watch: {
    smallLuggage() {
      this.touched.smallLuggage = true;
    },
    code() {
      this.touched.code = true;
    },

    bigLuggage() {
      this.touched.bigLuggage = true;
    },
    hour() {
      this.touched.hour = true;
    },
    minutes() {
      this.touched.minutes = true;
    },
    destination() {
      this.touched.destination = true;
    },
    selectedEmployees() {
      this.touched.selectedEmployees = true;

      this.addStops();
    },
    date() {
      this.touched.date = true;
    }
  },
  created() {
    this.$store.dispatch(GET_EMPLOYEES);
    console.log(this.employees)
  },
  computed: {
    ...mapGetters(["employees"])
  }
};
</script>
<style scoped>
.md-menu {
  margin-right: 20px;
  margin-left: 13px;
}
</style>
<style>
.md-card-wizard[data-color="green"] .moving-tab {
  background-color: orange;
}
</style>

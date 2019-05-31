<template>
<form @submit.prevent="onSubmit">
  <div class="md-layout">
    <div class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-70 md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-green">
          <div class="card-text">
            <h4 class="title">Create Reservation</h4>
          </div>
        </md-card-header>

        <md-card-content>

<div class="md-layout">
                <label class="md-layout-item md-size-15 md-form-label">Employees</label>
        <div class="md-layout-item">
                <md-field>
                <md-select v-model="selectedEmployees"  name="employees" id="employees" md-dense multiple>
                    <md-option v-for="employee in this.employees" :value="employee.full_name" :key="employee.id">{{employee.full_name}}</md-option>
                </md-select>
                </md-field>
            </div>
</div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Pickup</label>
            <div class="md-layout-item">
              <md-field>
                <label>Pickup Address</label>
                <md-input v-model="pickup" placeholder="placeholder"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Destination</label>
            <div class="md-layout-item">
              <md-field>
                <label>Destination Address</label>
                <md-input v-model="destination" placeholder="placeholder"></md-input>
              </md-field>
            </div>
          </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label">Reservation Date</label>
          <md-datepicker class="md-layout-item" v-model="date" md-immediately/>
        </div>

        <div class="md-layout">
                <label class="md-layout-item md-size-15 md-form-label">Reservation Time</label>
                <div class="md-layout-item">
                    <md-field>
                    <label for="hour">Hour</label>
                    <md-select v-model="hours" name="hour" id="hour" md-dense>
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
                    </md-field>
                </div>


                <div class="md-layout-item">
                    <md-field>
                    <label for="font">Minutes</label>
                    <md-select v-model="minutes" name="minutes" id="minutes" md-dense>
                        <md-option value="15">15</md-option>
                        <md-option value="30">30</md-option>
                        <md-option value="45">45</md-option>
                        <md-option value="00">00</md-option>
                    </md-select>
                    </md-field>
                </div>
        </div>


        <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Reservation code</label>
            <div class="md-layout-item">
              <md-field>
                <label>Reservation code</label>
                <md-input v-model="code" placeholder="placeholder"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout" style="margin-top:50px;">
              <div class="md-layout-item mx-auto md-size-30">

                <md-button class="md-success" type="submit">Create reservation</md-button>
              </div>
          </div>





        </md-card-content>
      </md-card>
    </div>
  </div>
  </form>
</template>

<script>

import { GET_EMPLOYEES,CREATE_RESERVATION } from "@/store/actions.type";

import { mapGetters } from "vuex";

export default {
  name: "CompanyCreateReservation",
  components: {},
  data() {
    return {
        selectedEmployees: [],
        pickup: "",
        destination: "",
        status: "",
        hours: "",
        minutes: "",
        date: "",
        code: ""
    };
  },
  methods: {
    onSubmit(){
      let fixed_time = this.hours+":"+this.minutes+":00"
      let form = {
        code: this.code,
        date: this.date,
        time: fixed_time,
        destination: this.destination, 
        pickup: this.pickup
      };
      console.log("credentials are", form);

      this.$store.dispatch(CREATE_RESERVATION, form).then(() => {

          this.$router.push({ name: "CompanyReservations" });

      });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if (e.target.name) {
        this.createImage(files[0], "circle");
      } else {
        this.createImage(files[0]);
      }
    },
    createImage(file, type) {
      let reader = new FileReader();
      let vm = this;

      reader.onload = e => {
        if (type === "circle") {
          vm.imageCircle = e.target.result;
        } else {
          vm.imageRegular = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(type) {
      if (type === "circle") {
        this.imageCircle = "";
      } else {
        this.imageRegular = "";
      }
    },
    onResponsiveInverted() {
      if (window.innerWidth < 768) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  created(){
    this.$store.dispatch(GET_EMPLOYEES);
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  computed: {
    ...mapGetters(["employees"])
  }
};
</script>
<style lang="scss" scoped>
.md-card .md-card-actions {
  border: none;
}

.md-inline-checkboxes {
  display: inline-flex;

  .md-checkbox {
    margin-top: 15px !important;
  }
}

.md-checkbox,
.md-radio {
  margin-top: 15px;
  margin-bottom: 0.5rem;
}

.md-checkbox,
.md-radio {
  display: flex;
}

.md-radio /deep/ .md-radio-container {
  margin-left: 5px;
  position: relative;
  left: -3px;
}

.md-form-label + .md-layout-item .md-checkbox:not(:first-child),
.md-form-label + .md-layout-item + .md-layout-item .md-radio:not(:first-child),
.md-form-label + .md-layout-item .md-radio {
  margin-top: 0;
}

.form-control-static {
  margin-top: 6px;
}
</style>

<template>
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
                <md-select v-model="employees" name="employees" id="employees" md-dense multiple>
                    <md-option value="fight-club">John Smith</md-option>
                    <md-option value="godfather">Jack Sling</md-option>
                    <md-option value="godfather-ii">Jared Stone</md-option>
                    <md-option value="godfather-iii">Jim Strange</md-option>
                    <md-option value="godfellas">Juniper Salt</md-option>
                    <md-option value="pulp-fiction">Jumbo Jet</md-option>
                </md-select>
                </md-field>
            </div>
</div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Pickup</label>
            <div class="md-layout-item">
              <md-field>
                <label>Pickup Address</label>
                <md-input v-model="placeholder" placeholder="placeholder"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Destination</label>
            <div class="md-layout-item">
              <md-field>
                <label>Destination Address</label>
                <md-input v-model="placeholder" placeholder="placeholder"></md-input>
              </md-field>
            </div>
          </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label">Reservation Date</label>
          <md-datepicker class="md-layout-item" v-model="selectedClose" md-immediately/>
        </div>

        <div class="md-layout">
                <label class="md-layout-item md-size-15 md-form-label">Reservation Time</label>
                <div class="md-layout-item">
                    <md-field>
                    <label for="font">Hour</label>
                    <md-select v-model="font" name="font" id="font" md-dense>
                        <md-option value="arial">1</md-option>
                        <md-option value="calibri">2</md-option>
                        <md-option value="cambria">3</md-option>
                        <md-option value="comic-sans">4</md-option>
                        <md-option value="consolas">5</md-option>
                        <md-option value="courier">6</md-option>
                        <md-option value="droid-sans">7</md-option>
                        <md-option value="georgia">8</md-option>
                        <md-option value="helvetica">9</md-option>
                        <md-option value="impact">10</md-option>
                        <md-option value="roboto">11</md-option>
                        <md-option value="segoe-ui">12</md-option>
                        <md-option value="times-new-roman">13</md-option>
                        <md-option value="ubuntu">14</md-option>
                        <md-option value="verdana">15</md-option>
                        <md-option value="verdana">16</md-option>
                        <md-option value="verdana">17</md-option>
                        <md-option value="verdana">18</md-option>
                        <md-option value="verdana">19</md-option>
                        <md-option value="verdana">20</md-option>
                        <md-option value="verdana">21</md-option>
                        <md-option value="verdana">22</md-option>
                        <md-option value="verdana">23</md-option>
                        <md-option value="verdana">00</md-option>
                    </md-select>
                    </md-field>
                </div>


                <div class="md-layout-item">
                    <md-field>
                    <label for="font">Minutes</label>
                    <md-select v-model="font" name="font" id="font" md-dense>
                        <md-option value="arial">15</md-option>
                        <md-option value="calibri">30</md-option>
                        <md-option value="cambria">45</md-option>
                        <md-option value="comic-sans">00</md-option>
                    </md-select>
                    </md-field>
                </div>
        </div>


        <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Reservation code</label>
            <div class="md-layout-item">
              <md-field>
                <label>Reservation code</label>
                <md-input v-model="placeholder" placeholder="placeholder"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout" style="margin-top:50px;">
              <div class="md-layout-item mx-auto md-size-30">

                <md-button class="md-success">Create reservation</md-button>
              </div>
          </div>





        </md-card-content>
      </md-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompanyCreateReservation",
  components: {},
    props: {
    regularImg: {
      type: String,
      default: "./img/image_placeholder.jpg"
    },
    avatarImg: {
      type: String,
      default: "./img/placeholder.jpg"
    }
  },
  data() {
    return {
        employees: [],
        imageRegular: "",
      layout1: null,
      layout2: null,
      layout3: null,
      emailadress: null,
      emailadress1: null,
      placeholder: null,
      password: null,
      success: null,
      error: null,
      password1: null,
      password2: null,
      boolean: false,
      disabled: null,
      boolean1: false,
      helper: null,
      checkbox1: null,
      checkbox2: null,
      checkbox3: null,
      checkbox4: null,
      checkbox5: null,
      checkbox6: true,
      checkbox7: null,
      checkbox8: true,
      checkbox9: null,
      radio: true,
      radio1: true,
      radio2: true
    };
  },
  methods: {

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
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
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

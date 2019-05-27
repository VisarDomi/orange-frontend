<template>
  <div class="md-layout">
    <div class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-70 md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-green">
          <div class="card-text">
            <h4 class="title">Create Driver</h4>
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">With Help</label>
            <div class="md-layout-item">
              <md-field>
                <md-input v-model="helper" type="text"></md-input>
                <span class="md-helper-text">A block of help text that breaks onto a new line.</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Password</label>
            <div class="md-layout-item">
              <md-field>
                <md-input v-model="password2" type="password"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">Placeholder</label>
            <div class="md-layout-item">
              <md-field>
                <label>With label</label>
                <md-input v-model="placeholder" placeholder="placeholder"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <div class="md-layout-item md-size-70 md-xsmall-size-100 mx-auto">
              <h4 class="card-title">Upload Image</h4>
              <div class="file-input">
                <div v-if="!imageRegular">
                  <div class="image-container">
                    <img :src="regularImg" title>
                  </div>
                </div>
                <div class="image-container" v-else>
                  <img :src="imageRegular">
                </div>
                <div class="button-container">
                  <md-button class="md-danger md-round" @click="removeImage" v-if="imageRegular">
                    <i class="fa fa-times"></i>Remove
                  </md-button>
                  <md-button class="md-success md-round md-fileinput">
                    <template v-if="!imageRegular">Select image</template>
                    <template v-else>Change</template>
                    <input type="file" @change="onFileChange">
                  </md-button>
                </div>
              </div>
            </div>
          </div>

          <div class="md-layout" style="margin-top:120px;">
              <div class="md-layout-item mx-auto md-size-30">

                <md-button class="md-success">Add driver</md-button>
              </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateDriver",
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

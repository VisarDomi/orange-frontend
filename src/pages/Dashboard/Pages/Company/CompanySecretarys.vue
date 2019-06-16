<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-button class="md-warning" @click="addSecretary()">Add new secretary...</md-button>
      </div>
    </div>

    <div class="md-layout">
      <div
        v-for="(secretary, index) in this.secretarysData"
        :key="secretary.id"
        class="md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100 auto-mx"
      >
        <md-card>
          <!-- <md-card-media md-medium>
          <img class="img" :src="profileCard">
          </md-card-media>-->

          <md-card-header>
            <div class="md-title">{{secretary.full_name}}</div>
            <div class="md-subhead">Driver</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <!-- <div>
                <md-button class="md-warning" @click.native="open_secretary(secretary)">Details</md-button>
              </div>-->
              <md-card-expand-trigger>
                <md-button class="md-button md-warning">
                  <md-icon>keyboard_arrow_down</md-icon>Details
                </md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                <md-field>
                  <label>Full Name</label>
                  <md-input v-model="secretary.full_name" :disabled="!secretary.nameEditable"></md-input>

                  <md-button
                    v-if="!secretary.nameEditable"
                    class="md-just-icon md-warning md-simple"
                    @click="enableNameEditing(secretary.id)"
                  >
                    <md-icon>edit</md-icon>
                  </md-button>
                  <md-button
                    v-if="secretary.nameEditable"
                    class="md-just-icon md-warning md-simple"
                    @click="saveSecreatry(secretary)"
                  >
                    <md-icon>done</md-icon>
                  </md-button>
                </md-field>
                <div>
                  <md-button
                    class="md-danger"
                    @click.native="delete_secretary(secretary, index)"
                  >Delete</md-button>
                </div>
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { PricingCard, TestimonialCard } from "@/components";
import {
  GET_SECRETARYS,
  GET_SECRETARY,
  UPDATE_SECRETARY,
  DELETE_SECRETARY
} from "@/store/actions.type";
import { getUser } from "@/store/services/userstorage";
import { mapGetters } from "vuex";
export default {
  name: "CompanySecretaries",
  components: {
    PricingCard,
    TestimonialCard
  },
  props: {
    profileCard: {
      type: String,
      default: "./img/faces/card-profile1-square.jpg"
    }
  },
  data() {
    return {
      secretarysData: []
    };
  },
  methods: {
    enableNameEditing(id) {
      for (let secretary in this.secretarysData) {
        if (this.secretarysData[secretary].id == id) {
          this.secretarysData[secretary].nameEditable = true;
          let cloneSecretary = { ...this.secretarysData[secretary] };
          this.secretarysData.splice(secretary, 1);
          this.secretarysData.splice(secretary, 0, cloneSecretary);
        }
      }
    },
    async saveSecreatry(secretary) {
      secretary.nameEditable = false;
      
      let secretaryData = {
        secretary: {
          full_name: secretary.full_name
        },
        // status: secretary.status,
        company_id: getUser().company_id,
        secretaryId: secretary.id
      };
      console.log(secretaryData);
      await this.$store.dispatch(UPDATE_SECRETARY, secretaryData);
    },
    async delete_secretary(secretary, index) {
      let secretaryData = {
        secretaryId: secretary.id,
        company_id: getUser().company_id
      }
      await this.$store.dispatch(DELETE_SECRETARY, secretaryData)
      let payload = { company_id: getUser().company_id };
      this.$store.dispatch(GET_SECRETARYS, payload);

      this.secretarysData.splice(index, 1);
    },
    addSecretary() {
      this.$router.push({ name: "CompanyCreateSecretary" });
    },
    async open_secretary(secretary) {
      await this.$store.dispatch(GET_SECRETARY, { secretaryId: secretary.id });
      this.$router.push({
        name: "SecretaryDetail",
        params: {
          id: secretary.id
        }
      });
    },
    onResponsiveInverted() {
      if (window.innerWidth < 768) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    async whileMounting() {
      let payload = { company_id: getUser().company_id };
      await this.$store.dispatch(GET_SECRETARYS, payload)
      for (let secretary of this.getSecretarys) {
        this.secretarysData.push(secretary);
      }
      for (let secretary of this.secretarysData) {
        console.log("secretary object is: ", secretary);
        secretary.nameEditable = false;
      }
    }
  },
  mounted() {
    this.whileMounting()
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },

  computed: {
    ...mapGetters(["getSecretarys"])
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>

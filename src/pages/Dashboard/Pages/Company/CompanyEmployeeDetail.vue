<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-40 mx-auto">
        <form>
          <md-card>
            <md-card-header class="md-card-header-icon md-card-header-green">
              <div class="card-icon">
                <md-icon>card_travel</md-icon>
              </div>
              <h4 class="title">
                Employee -
                <small>Details</small>
              </h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter md-size-100">
                <div class="md-layout md-layout-item md-small-size-100 md-size-100">
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Name</label>
                      <md-input v-model="full_name" :disabled="!editing"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Address</label>
                      <md-input v-model="address" :disabled="!editing"></md-input>
                    </md-field>
                  </div>

                  <!-- <div class="md-layout-item md-size-100 text-right">

                  </div>-->
                </div>
              </div>
            </md-card-content>
          </md-card>
        </form>
      </div>
    </div>
    <div class="md-layout">
      <md-button v-if="editing" class="md-warning mx-auto" @click="saveChanges()">Done</md-button>
      <md-button v-else class="md-warning mx-auto" @click="editEmployee()">Edit Employee</md-button>
    </div>
  </div>
</template>

<script>
import { UserCard } from "@/pages";
import { GET_EMPLOYEE, UPDATE_EMPLOYEE } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "CompanyEmployeeDetail",
  components: {
    UserCard
  },
  data() {
    return {
      full_name: "",
      address: "",
      editing: false
    };
  },
  methods: {
    editEmployee(){
      this.editing = true;
    },
    saveChanges(){
      this.editing = false;
      let employee = {
        companyId: this.employee.company_id,
        employeeId: this.$route.params.id,
        full_name: this.full_name,
        address: this.address,
      }
      console.log(employee)
      this.$store.dispatch(UPDATE_EMPLOYEE, employee);
    }
  },
  mounted() {
    // this.$store.dispatch(ADMIN_GET_EMPLOYEE) //get employee with store then store it in variable, then get it with mapGetters and plug it into POST invoice
  },
  created() {
    this.$store
      .dispatch(GET_EMPLOYEE, {
        employeeId: this.$route.params.id
      })
      .then(() => {
        this.full_name = this.employee.full_name;
        this.address = this.employee.address;
      });
  },
  computed: {
    ...mapGetters(["employee"])
  }
  //need map getter employeeId
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>

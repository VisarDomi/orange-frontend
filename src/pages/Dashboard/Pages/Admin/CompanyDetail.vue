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
                Company -
                <small>Details</small>
              </h4>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter md-size-100">
                <div class="md-layout md-layout-item md-small-size-100 md-size-100">
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Name</label>
                      <md-input v-model="full_name" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Payment Frequency</label>
                      <md-input  v-model="payment_frequency" disabled></md-input>
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


      <!-- here starts the table -->
      <div class="md-layout-item md-size-100">
        <md-card>
          <md-card-header class="md-card-header-icon md-card-header-green">
            <div class="card-icon">
              <md-icon>commute</md-icon>
            </div>
            <h4 class="title">Itineraries</h4>
          </md-card-header>
          <md-card-content>
            <md-table
              :value="tableData"
              :md-sort.sync="currentSort"
              :md-sort-order.sync="currentSortOrder"
              :md-sort-fn="customSort"
              class="paginated-table table-striped table-hover"
            >
              <md-table-toolbar>
                <md-field>
                  <label for="pages">Per page</label>
                  <md-select v-model="pagination.perPage" name="pages">
                    <md-option
                      v-for="item in pagination.perPageOptions"
                      :key="item.id"
                      :label="item"
                      :value="item"
                    >{{ item }}</md-option>
                  </md-select>
                </md-field>

                <md-field >
                  <md-input
                    type="search"
                    class="mb-3"
                    clearable
                    style="width: 200px"
                    placeholder="Search records"
                    v-model="searchQuery"
                  ></md-input>
                </md-field>
              </md-table-toolbar>

              <md-table-row slot="md-table-row" slot-scope="{ item }">
                
                <md-table-cell md-label="Departure" md-sort-by="company_id">
                    



                    <div v-if="item.editable==true" > 
                        <md-field >
                        <md-input
                            type="text"
                            clearable
                            style="width: 50px"
                        ></md-input>
                        </md-field>
                    </div>

                    <div v-else>
                        {{item.id}}
                    </div >




                </md-table-cell>
                <md-table-cell>
                    &nbsp;
                </md-table-cell>
                <md-table-cell md-label="Destination" md-sort-by="grand_total">


                    <div v-if="item.editable==true" > 
                        <md-field >
                        <md-input
                            type="text"
                            clearable
                            style="width: 50px"
                        ></md-input>
                        </md-field>
                    </div>

                    <div v-else>
                        {{item.id}}
                    </div >


                </md-table-cell>
                <md-table-cell>
                    &nbsp;
                </md-table-cell>
                <md-table-cell md-label="Price">


                    <div v-if="item.editable==true" > 
                        <md-field >
                        <md-input
                            type="number"
                            clearable
                            style="width: 50px"
                        ></md-input>
                        </md-field>
                    </div>

                    <div v-else>
                        {{item.id}}
                    </div >    


                </md-table-cell>
              <md-table-cell md-label="Actions" >

                <md-button
                  class="md-just-icon md-warning md-simple"
                  @click.native="handleEdit(item)"
                >
                  <md-icon>edit</md-icon>
                </md-button>
                <md-button
                  class="md-just-icon md-success md-simple"
                  @click.native="handleDone(item)"
                >
                  <md-icon>done</md-icon>
                </md-button>
                <md-button
                  class="md-just-icon md-danger md-simple"
                  @click.native="handleDelete(item)"
                >
                  <md-icon>delete</md-icon>
                </md-button>

              </md-table-cell>
              </md-table-row>
            </md-table>
            <div class="footer-table md-table">
              <table>
                <tfoot>
                  <tr>
                    <th v-for="item in footerTable" :key="item.name" class="md-table-head">
                      <div class="md-table-head-container md-ripple md-disabled">
                        <div class="md-table-head-label">{{ item }}</div>
                      </div>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </md-card-content>
          <md-card-actions md-alignment="space-between">
            <div class>
              <p class="card-category">Showing {{ from + 1 }} to {{ to }} of {{ total }} entries</p>
            </div>
            <pagination
              class="pagination-no-border pagination-warning"
              v-model="pagination.currentPage"
              :per-page="pagination.perPage"
              :total="total"
            ></pagination>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>

import { Pagination } from "@/components";
import { UserCard } from "@/pages";
import { GET_COMPANY } from "@/store/actions.type";
import { GET_ADMIN_INVOICES, GET_ADMIN_INVOICE } from "@/store/actions.type"; //to be changed with itinerary store actions
import { mapGetters } from "vuex";
import Fuse from "fuse.js";
export default {
  name: "CompanyDetail",
  components: {
    UserCard,
    Pagination
  },
  data() {
    return {
      full_name: "",
      payment_frequency: "",
      //so far for the details of company, below, the table needed variables
      currentSort: "name",
      currentSortOrder: "asc",
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      footerTable: ["Departure","","Destination","","Price","Actions" ],
      searchQuery: "",
      propsToSearch: ["name", "email", "age"], //this is to be fixed for a correct search
      tableData: [],
      searchedData: [],
      fuseSearch: null
    };
  },
  methods: {
    //this function we may need in future but probably okay if deleted on refactor
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;
        if (this.currentSortOrder === "desc") {
          return a[sortBy].localeCompare(b[sortBy]);
        }
        return b[sortBy].localeCompare(a[sortBy]);
      });
    },
    handleEdit(item) {
        console.log("on handle edit: ", item)
        item.editable=true;
        console.log(item.editable)
        this.updateTableData(item.id)

        //swal isnt working for now, to be fixed too
        
        // swal({});
    //   swal({
    //     title: `You want to edit ${item.id}`,
    //     buttonsStyling: false,
    //     confirmButtonClass: "md-button md-info"
    //   }).fire();
    },
    handleDone(item){

        item.editable=false;
        this.updateTableData(item.id)

    },
    updateTableData(id){
        console.log("update table data id ", id)
        for(let item in this.tableData){
            console.log("item of table data", item)
            if(this.tableData[item].id==id){
                // this.tableData[item].editable = bool;
                let changed = this.tableData[item]
                 this.tableData.splice( item, 1, changed); // at index position 1, remove 0 elements, then add "baz" to that position
                console.log("updated item: ", this.tableData[item].editable)
            }
        }
    },
    handleDelete(item) {
  //add swal here too eventually, and implement delete, check with Itineraries.vue
    },
  },
  mounted() {
        // Fuse search initialization.
        //doesnt work now but need to make functional
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["name", "email"],
      threshold: 0.3
    });
  },
  created() {

    //get invoices this needs to be get companyitineraries
        this.$store.dispatch(GET_ADMIN_INVOICES).then(() => {
      console.log("GET invoices now: ", this.adminInvoices);
        for(let item in this.adminInvoices){
            this.adminInvoices[item].editable = false;
        }     

        //more shitfuck to clone the state array coming from store to stop vue from complaining about messing with state outside mutators
        let clone = JSON.parse(JSON.stringify(this.adminInvoices));
        console.log("b? ", clone)
      this.tableData = clone;
    });

    //this is for company details
    this.$store
      .dispatch(GET_COMPANY, {
        companyId: this.$route.params.id
      })
      .then(() => {
        this.full_name = this.company.full_name;
        this.payment_frequency = this.company.payment_frequency;
      });
  },
  computed: {
    ...mapGetters(["company", "adminInvoices"]), //to be changed from adminInvoices to companyItineraries
     /***
     * Returns a page from the searched data or the whole data. Search is performed in the watch section below
     */
    queriedData() {
      console.log("Table data is: ", this.tableData);
      let result = this.tableData;
      if (result == undefined) {
        console.log("returning nothing");
        return [];
      }
      if (this.searchedData.length > 0) {
        result = this.searchedData;
      }
      return result.slice(this.from, this.to);
    },
    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total() {
      if (this.searchedData == undefined) {
        return 0;
      } else {
        return this.searchedData.length > 0
          ? this.searchedData.length
          : this.tableData.length;
      }
    } 
  },
  watch: {
    /**
     * Searches through the table data by a given query.
     * NOTE: If you have a lot of data, it's recommended to do the search on the Server Side and only display the results here.
     * @param value of the query
     */
    searchQuery(value) {
      let result = this.tableData;
      if (value !== "") {
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    }
  }
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>

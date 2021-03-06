<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header class="md-card-header-icon md-card-header-green">
            <div class="card-icon">
              <md-icon>commute</md-icon>
            </div>
            <h4 class="title">Itineraries Price</h4>
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

                <md-field>
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
                  <div v-if="item.editable==true">
                    <md-field>
                      <md-input type="text" clearable style="width: 50px"></md-input>
                    </md-field>
                  </div>

                  <div v-else>{{item.id}}</div>
                </md-table-cell>
                <md-table-cell>&nbsp;</md-table-cell>
                <md-table-cell md-label="Destination" md-sort-by="grand_total">
                  <div v-if="item.editable==true">
                    <md-field>
                      <md-input type="text" clearable style="width: 50px"></md-input>
                    </md-field>
                  </div>

                  <div v-else>{{item.destination}}</div>
                </md-table-cell>
                <md-table-cell>&nbsp;</md-table-cell>
                <md-table-cell md-label="Price">
                  <div v-if="item.editable==true">
                    <md-field>
                      <md-input type="number" clearable style="width: 50px"></md-input>
                    </md-field>
                  </div>

                  <div v-else>{{item.id}}</div>
                </md-table-cell>
                <md-table-cell md-label="Actions">
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
    <div class="md-layout">
      <div class="md-layout-item">
        <md-button class="md-warning" @click="addItinerary()">Add new itinerary...</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from "@/components";
import users from "../../Tables/users";
import Fuse from "fuse.js";
import swal from "sweetalert2";
// import { GET_ADMIN_ITINERARYS, GET_ADMIN_ITINERARY } from "@/store/actions.type";
// import { GET_ADMIN_ITINERARYS, GET_ADMIN_ITINERARY } from "@/store/actions.type";
import { GET_ADMIN_INVOICES, GET_ADMIN_INVOICE } from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "Itineraries",
  components: {
    Pagination
  },
  computed: {
    ...mapGetters(["getAdminInvoices"]),
    // ...mapGetters(["getAdminItinerarys"]),
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
  data() {
    return {
      currentSort: "name",
      currentSortOrder: "asc",
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      footerTable: ["Departure", "", "Destination", "", "Price", "Actions"],
      searchQuery: "",
      propsToSearch: ["name", "email", "age"],
      tableData: [],
      searchedData: [],
      fuseSearch: null
    };
  },
  methods: {
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;
        if (this.currentSortOrder === "desc") {
          return a[sortBy].localeCompare(b[sortBy]);
        }
        return b[sortBy].localeCompare(a[sortBy]);
      });
    },

    addItinerary() {
      let itinerary = {
        departure: "departure",
        destination: "destination",
        price: "99"
      };
      let payload = {
        companyId: null,
        itinerary: itinerary
      };
      this.$store.dispatch(CREATE_ADMIN_ITINERARY, payload);
      // update tableData
      // this.$store.dispatch(GET_ADMIN_ITINERARYS)
      //     let clone = JSON.parse(JSON.stringify(this.getAdminItinerarys));
      //     this.tableData = clone;
      this.tableData.push({
        id: "placeholder",
        destination: "placeholder",
        grand_total: "placeholder"
      });
    },

    handleEdit(item) {
      console.log("on handle edit: ", item);
      item.editable = true;
      console.log(item.editable);
      this.updateTableData(item.id);

      //   swal({});
      // swal({
      //   title: `You want to edit ${item.id}`,
      //   buttonsStyling: false,
      //   confirmButtonClass: "md-button md-info"
      // }).fire();
    },

    handleDone(item) {
      item.editable = false;
      this.updateTableData(item.id);
    },

    //this hole shitfuck is to force vue to rerender the row, since it wont play nice to just change the variable, i'm assuming since its inside an object, and it doesnt
    //watch it. probably needs an issue open on github

    //it still makes vue complain about mutation outside mutation handlers -> solved below with deep array cloning
    updateTableData(id) {
      console.log("update table data id ", id);
      for (let item in this.tableData) {
        console.log("item of table data", item);
        if (this.tableData[item].id == id) {
          // this.tableData[item].editable = bool;
          let changed = this.tableData[item];
          this.tableData.splice(item, 1, changed); // at index position 1, remove 0 elements, then add "baz" to that position
          console.log("updated item: ", this.tableData[item].editable);
        }
      }
    },

    addEditableToData() {
      for (let item in this.tableData) {
        this.tableData[item].editable = false;
      }
    },

    handleDelete(item) {
      //   swal({
      //     title: "Are you sure?",
      //     text: `You won't be able to revert this!`,
      //     type: "warning",
      //     showCancelButton: true,
      //     confirmButtonClass: "md-button md-success btn-fill",
      //     cancelButtonClass: "md-button md-danger btn-fill",
      //     confirmButtonText: "Yes, delete it!",
      //     buttonsStyling: false
      //   }).then(result => {
      //     if (result.value) {
      //     //   this.deleteRow(item);
      //       console.log("pretend delete")
      //       swal({
      //         title: "Deleted!",
      //         text: `You deleted ${item.name}`,
      //         type: "success",
      //         confirmButtonClass: "md-button md-success btn-fill",
      //         buttonsStyling: false
      //       });
      //     }
      //   });
    },
    deleteRow(item) {
      let indexToDelete = this.tableData.findIndex(
        tableRow => tableRow.id === item.id
      );
      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1);
      }
    }
  },
  created() {
    // this.$store.dispatch(GET_ADMIN_ITINERARYS).then(() => {
    //   console.log("GET itinerarys now: ", this.getAdminItinerarys);
    //     for(let item in this.getAdminItinerarys){
    //         this.getAdminItinerarys[item].editable = false;
    //     }

    //     //more shitfuck to clone the state array coming from store to stop vue from complaining about messing with state outside mutators
    //     let clone = JSON.parse(JSON.stringify(this.getAdminItinerarys));
    //     console.log("b? ", clone)
    //   this.tableData = clone;
    // });
    this.$store.dispatch(GET_ADMIN_INVOICES).then(() => {
      console.log("GET invoices now: ", this.getAdminInvoices);
      for (let item in this.getAdminInvoices) {
        this.getAdminInvoices[item].editable = false;
      }

      //more shitfuck to clone the state array coming from store to stop vue from complaining about messing with state outside mutators
      let clone = JSON.parse(JSON.stringify(this.getAdminInvoices));
      console.log("b? ", clone);
      this.tableData = clone;
    });
  },
  mounted() {
    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["name", "email"],
      threshold: 0.3
    });
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

<style lang="css" scoped>
.md-card .md-card-actions {
  border: 0;
  margin-left: 20px;
  margin-right: 20px;
}
</style>

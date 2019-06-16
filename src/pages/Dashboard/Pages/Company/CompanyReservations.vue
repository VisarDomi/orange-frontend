<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-button class="md-warning" @click="createReservation()">Create reservation</md-button>
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header class="md-card-header-icon md-card-header-green">
            <div class="card-icon">
              <md-icon>assignment</md-icon>
            </div>
            <h4 class="title">Reservations</h4>
          </md-card-header>
          <md-card-content>
            <md-table
              :value="queriedData"
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
                      :key="item"
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

              <md-table-row
                slot="md-table-row"
                slot-scope="{ item }"
                @click.native="openReservation(item)"
              >
                <!-- ["Employee", "Date", "Destination", "Code"] -->
                <md-table-cell md-label="Employee" md-sort-by="date">
                  <span v-for="stop in item.stops" :key="stop.id">
                    {{
                    stop.employee_full_name
                    }},
                  </span>
                </md-table-cell>
                <md-table-cell md-label="Date" md-sort-by="date">
                  {{
                  item.date
                  }}
                </md-table-cell>
                <md-table-cell md-label="Destination">{{ item.destination }}</md-table-cell>
                <!-- <md-table-cell md-label="KSt">{{ item.kst }}</md-table-cell> -->
                <!-- <md-table-cell md-label="Destination">{{ item.destination }}</md-table-cell>
                <md-table-cell md-label="Status" style="justify-content:left;">{{ item.status }}</md-table-cell>-->
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
              class="pagination-no-border pagination-success"
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
import users from "../../Tables/users";
import Fuse from "fuse.js";
import swal from "sweetalert2";
import {
  GET_COMPANY_RESERVATIONS,
  GET_COMPANY_RESERVATION
} from "@/store/actions.type";
import { mapGetters } from "vuex";
import { getUser } from "@/store/services/userstorage";

export default {
  name: "CompanyReservations",
  components: {
    Pagination
  },
  computed: {
    ...mapGetters(["getCompanyReservations"]),
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
      footerTable: ["Employee", "Date", "Destination"],
      searchQuery: "",
      propsToSearch: ["name", "email", "age"],
      tableData: [],
      searchedData: [],
      fuseSearch: null
    };
  },
  methods: {
    createReservation() {
      this.$router.push({ name: "CompanyWizard" });
    },
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;
        if (this.currentSortOrder === "desc") {
          return a[sortBy].localeCompare(b[sortBy]);
        }
        return b[sortBy].localeCompare(a[sortBy]);
      });
    },
    handleLike(item) {
      swal({
        title: `You liked ${item.name}`,
        buttonsStyling: false,
        type: "success",
        confirmButtonClass: "md-button md-success"
      });
    },
    handleEdit(item) {
      swal({
        title: `You want to edit ${item.name}`,
        buttonsStyling: false,
        confirmButtonClass: "md-button md-info"
      });
    },
    openReservation(item) {
      this.$router.push({
        name: "CompanyReservationDetail",
        params: { id: item.id }
      });
    },
    handleDelete(item) {
      swal({
        title: "Are you sure?",
        text: `You won't be able to revert this!`,
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "md-button md-success btn-fill",
        cancelButtonClass: "md-button md-danger btn-fill",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.deleteRow(item);
          swal({
            title: "Deleted!",
            text: `You deleted ${item.name}`,
            type: "success",
            confirmButtonClass: "md-button md-success btn-fill",
            buttonsStyling: false
          });
        }
      });
    },
    deleteRow(item) {
      let indexToDelete = this.tableData.findIndex(
        tableRow => tableRow.id === item.id
      );
      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1);
      }
    },
    async whileCreating() {
      let payload = { companyId: getUser().company_id };
      await this.$store.dispatch(GET_COMPANY_RESERVATIONS, payload);
      this.tableData = this.getCompanyReservations;
    }
  },
  created() {
<<<<<<< HEAD
    let payload = {
      companyId: getUser().company_id
    };
    console.log("????")
    this.$store.dispatch(GET_COMPANY_RESERVATIONS, payload).then(() => {
      console.log(
        "this.getCompanyReservations now: ",
        this.getCompanyReservations
      );
      this.tableData = this.getCompanyReservations;
    });
    console.log("????")
=======
    this.whileCreating()
>>>>>>> 4b0acac460683001f5e867b30d93ca22b154d6fc
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

<style>
.pagination.pagination-success > .page-item.active > a {
  background-color: orange;
  border-color: orange;
}

.md-select-menu .md-list-item.md-selected .md-list-item-button {
  background-color: orange;
}

.md-select-menu .md-list-item .md-list-item-button:hover {
  background-color: orange !important;
}
</style>

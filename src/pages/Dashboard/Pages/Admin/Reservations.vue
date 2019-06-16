<template>
  <div>
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
              :value="tableReservationsData"
              :md-sort.sync="currentSort"
              :md-sort-order.sync="currentSortOrder"
              :md-sort-fn="customSort"
              :key="this.rerender"
              @md-selected="onSelect"
              class="paginated-table table-hover"
            >
              <md-table-toolbar>
                <md-field>
                  <label for="pages">Per Page</label>
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
                  <label for="companySearchValue">Companys filter</label>
                  <md-select name="companySearchValue" v-model="companySearchValue" md-dense>
                    <md-option value="All">All</md-option>
                    <md-option
                      v-for="(company, index) in this.companysName"
                      :key="company.id"
                      :value="company.name"
                    >{{company.name}}</md-option>
                  </md-select>
                </md-field>

                <md-field>
                  <label for="monthSearchValue">Months filter</label>
                  <md-select name="monthSearchValue" v-model="monthSearchValue" md-dense>
                    <md-option value="All">All</md-option>
                    <md-option value="01">January</md-option>
                    <md-option value="02">February</md-option>
                    <md-option value="03">March</md-option>
                    <md-option value="04">April</md-option>
                    <md-option value="05">May</md-option>
                    <md-option value="06">June</md-option>
                    <md-option value="07">July</md-option>
                    <md-option value="08">August</md-option>
                    <md-option value="09">September</md-option>
                    <md-option value="10">October</md-option>
                    <md-option value="11">November</md-option>
                    <md-option value="12">December</md-option>
                    <md-option value="All">All</md-option>
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

              <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
                <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

                <div class="md-toolbar-section-end">
                  <md-button class="md-button md-warning">
                    Create Invoice
                    <md-icon>credit_card</md-icon>
                  </md-button>

                  <md-button class="md-button md-danger">
                    <md-icon>delete</md-icon>
                  </md-button>
                </div>
              </md-table-toolbar>

              <md-table-row
                slot="md-table-row"
                slot-scope="{ item }"
                @click.native="openReservation(item)"
                md-selectable="multiple"
                md-auto-select
                :class="{
                'table-success': item.status == 'accepted',
                'table-warning' : item.status =='waiting',
                'table-danger' : item.status =='rejected'
                }"
              >
                <md-table-cell md-label="Company" md-sort-by="company_id">
                  {{
                  item.company.name
                  }}
                </md-table-cell>
                <md-table-cell md-label="Driver" md-sort-by="driver_id">
                  {{
                  item.driver.id
                  }}
                </md-table-cell>
                <md-table-cell md-label="Status" md-sort-by="status">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Destination">{{ item.destination }}</md-table-cell>
                <md-table-cell md-label="Date" md-sort-by="date">{{ item.date }} / {{ item.time }}</md-table-cell>
                <md-table-cell md-label="KSt" style="justify-content:left;">{{ item.code }}</md-table-cell>
              </md-table-row>
            </md-table>
            <p>Selected:</p>
            {{selected}}
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
import users from "../../Tables/users";
import Fuse from "fuse.js";
import swal from "sweetalert2";
import {
  GET_ADMIN_RESERVATIONS,
  GET_ADMIN_RESERVATION,
  GET_COMPANYS
} from "@/store/actions.type";
import { mapGetters } from "vuex";

const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item =>
      toLower(item.last_name).includes(toLower(term))
    );
  }
  return items;
};

export default {
  name: "Reservations",
  components: {
    Pagination
  },
  computed: {
    ...mapGetters(["getAdminReservations", "getCompanys"]),
    /***
     * Returns a page from the searched data or the whole data. Search is performed in the watch section below
     */
    queriedData() {
      //  * in the v-for in table rows, tableReservationsData was queriedData
      console.log("Table data is: ", this.tableReservationsData);
      let result = this.tableReservationsData;
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
          : this.tableReservationsData.length;
      }
    }
  },
  data() {
    return {
      currentSort: "name",
      selected: [],
      currentSortOrder: "asc",
      rerender: 0,
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      footerTable: [
        "Company",
        "Driver",
        "Status",
        "Destination",
        "Date",
        "KSt"
      ],
      searchQuery: "",
      propsToSearch: ["name", "email", "age"],
      monthSearchValue: "All",
      companySearchValue: "All",
      tableReservationsData: [],
      companysName: [],
      searchedData: [],
      fuseSearch: null
    };
  },
  methods: {
    searchOnTable() {
      console.log("search is: ", this.search);
      this.searched = searchByName(this.members, this.search);
    },
    filterReservations(condition, value) {
      console.log("condition: ", condition);
      console.log("value: ", value);
      this.tableReservationsData = [];
      for (let reservation of this.getAdminReservations) {
        this.tableReservationsData.push(reservation);
      }
      let searched = this.searchTable(value, condition); // months/companys

      this.tableReservationsData = searched;
    },
    searchTable(term, condition) {
      // return list of reservations
      if (term == "All") {
        return this.tableReservationsData;
      }
      if (condition == "companys") {
        var returnReservations = this.tableReservationsData.filter(
          this.withSameCompany
        );
      } else if (condition == "months") {
        var returnReservations = this.tableReservationsData.filter(
          this.withSameMonth
        );
      }
      return returnReservations;
    },
    withSameMonth(reservation) {
      // console.log(reservationMonth)
      let reservationMonth = reservation.date.split("-")[1];

      return reservationMonth == this.monthSearchValue; //this should be a string, value="01"
    },
    withSameCompany(reservation) {
      // console.log(reservationMonth)
      let reservationCompany = reservation.company.name;

      return reservationCompany == this.companySearchValue; //this should be a string, value="company1"
    },

    getAlternateLabel(count) {
      let plural = "";
      if (count > 1) {
        plural = "s";
      }
      return `${count} reservation${plural} selected`;
    },
    onSelect(items) {
      this.selected = items;
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
      this.$store
        .dispatch(GET_ADMIN_RESERVATION, { reservationId: item.id })
        .then(() => {
          console.log("after dispatch reservation");
        });
      this.$router.push({
        name: "ReservationDetail",
        params: {
          id: item.id
        }
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
      let indexToDelete = this.tableReservationsData.findIndex(
        tableRow => tableRow.id === item.id
      );
      if (indexToDelete >= 0) {
        this.tableReservationsData.splice(indexToDelete, 1);
      }
    }
  },
  created() {
    // this.$store.dispatch(GET_ADMIN_RESERVATIONS).then(() => {
    //   console.log("GET reservations now: ", this.getAdminReservations);
    //   this.tableReservationsData = this.getAdminReservations;
    // });
    // this.$store.dispatch(GET_COMPANYS).then(() => {
    //   this.companysName = []
    //   for(let company of this.getCompanys){
    //     this.companysName.push(
    //       {name: company.name,
    //         id: company.id})
    //   }
    //   this.isLoading = false
    //   console.log("")
    //   console.log("names: ", this.companysName)
    //   console.log("loading: ", this.isLoading)
    //   console.log("")
    // })
  },
  mounted() {
    this.$store.dispatch(GET_ADMIN_RESERVATIONS).then(() => {
      console.log("GET reservations now: ", this.getAdminReservations);
      this.tableReservationsData = this.getAdminReservations;
    });
    this.$store.dispatch(GET_COMPANYS).then(() => {
      for (let company of this.getCompanys) {
        this.companysName.push({ name: company.name, id: company.id });
      }
      console.log("names: ", this.companysName);
      this.rerender += 1;
    });
    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableReservationsData, {
      keys: ["code"],
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
      let result = this.tableReservationsData;
      if (value !== "") {
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    },
    monthSearchValue() {
      return this.filterReservations("months", this.monthSearchValue);
    },
    companySearchValue() {
      return this.filterReservations("companys", this.companySearchValue);
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

.md-table.md-theme-default .md-table-alternate-header .md-table-toolbar {
  color: rgba(0, 0, 0, 0.87);
  color: var(
    --md-theme-default-text-primary-on-background,
    rgba(0, 0, 0, 0.87)
  );
  background-color: rgba(255, 82, 82, 0.2);
  background-color: var(--md-theme-default-accent-on-, rgba(255, 82, 82, 0.2));
}

.md-table-alternate-header {
  padding-left: 30px;
  padding-right: 30px;
}
</style>


<style>
.md-card .md-card-actions {
  border: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.md-table.md-theme-default .md-table-alternate-header .md-table-toolbar {
  color: rgba(0, 0, 0, 0.87);
  color: var(
    --md-theme-default-text-primary-on-background,
    rgba(0, 0, 0, 0.87)
  );
  background-color: rgba(255, 82, 82, 0.2);
  background-color: var(--md-theme-default-accent-on-, rgba(255, 82, 82, 0.2));
}

.md-table-alternate-header {
  padding-left: 20px;
  margin-top: 13px;
  padding-right: 20px;
}

.md-card .md-card-header-green .card-icon {
  background: orange;
}

.md-toolbar-section-end .md-button {
  margin-bottom: 5px;
  margin-right: 5px;
}

.md-toolbar .md-button:first-child {
  margin-left: 0;
  margin-bottom: 5px;
  margin-right: 5px;
}

.md-toolbar-section-end,
.md-toolbar-section-start {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 5px;
}

tr > .md-ripple {
  display: none;
}

.md-table-alternate-header .md-transparent {
  background-color: #eee !important;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.md-table-cell-selection .md-table-cell-container {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: visible;
  margin-left: 5px;
}

.md-table-cell-selection .md-table-head-label {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: visible;
  margin-left: 5px;
}

/* .md-toolbar.md-transparent.md-theme-default {
    background-color: lightblue !important;
    -webkit-box-shadow: none;
    box-shadow: none;
} */

.md-table-cell-selection .md-table-head-container {
  justify-content: left;
}
</style>

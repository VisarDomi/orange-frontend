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
              :value="queriedData"
              :md-sort.sync="currentSort"
              :md-sort-order.sync="currentSortOrder"
              :md-sort-fn="customSort"
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
                  <label for="monthsValue">Months filter</label>
                  <md-select name="monthsValue" v-model="monthsValue" md-dense>
                    <md-option value="Any Month">Any Month</md-option>
                    <md-option value="01">1</md-option>
                    <md-option value="02">2</md-option>
                    <md-option value="03">3</md-option>
                    <md-option value="04">4</md-option>
                    <md-option value="05">5</md-option>
                    <md-option value="06">6</md-option>
                    <md-option value="07">7</md-option>
                    <md-option value="08">8</md-option>
                    <md-option value="09">9</md-option>
                    <md-option value="10">10</md-option>
                    <md-option value="11">11</md-option>
                    <md-option value="12">12</md-option>
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
                @click.native="open_reservation(item)"
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
  GET_COMPANY
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
    ...mapGetters(["getAdminReservations", "getCompany"]),
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
      selected: [],
      currentSortOrder: "asc",
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      monthsValue: "Any Month",
      footerTable: [
        "Company",
        "Driver",
        "Status",
        "Destination",
        "Date",
        "Drivers",
        "KSt"
      ],
      searchQuery: "",
      propsToSearch: ["name", "email", "age"],
      tableData: [],
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

      let searched = this.searchByMonth(this.tableData, this.value);

      this.tableData = searched;
    },
    searchByMonth(items, term) {
      // return list of reservations
      var returnReservations = items.filter(this.withSameMonth);
      return returnReservations;
    },
    withSameMonth(reservation) {
      // console.log(reservationMonth)
      let reservationMonth = reservation.date.split("-")[1];

      return reservationMonth == this.monthsValue;
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
    open_reservation(item) {
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
      let indexToDelete = this.tableData.findIndex(
        tableRow => tableRow.id === item.id
      );
      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1);
      }
    }
  },
  created() {
    this.$store.dispatch(GET_ADMIN_RESERVATIONS).then(() => {
      console.log("GET reservations now: ", this.getAdminReservations);
      this.tableData = this.getAdminReservations;
    });
  },
  mounted() {
    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableData, {
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
      let result = this.tableData;
      if (value !== "") {
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    },
    monthsValue() {
      return this.filterReservations("months", this.monthsValue);
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

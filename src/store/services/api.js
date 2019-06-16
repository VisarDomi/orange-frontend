import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { getToken } from "./jwt";

const API_URL = "https://orange-backend.ml/api";

export const ApiService = {
  init() {
    axios.defaults.headers.common = {
      "Secure-Api-Key": "asdfasdfetye1a2",
      "Content-Type": "application/json"
    };
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },
  setHeader() {
    let token = getToken();
    Vue.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  setHeaderMultipart() {
    Vue.axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
  },
  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  get(resource) {
    console.log(`get resource is:`, resource);
    return Vue.axios.get(`${resource}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  post(resource, params) {
    console.log(`post resource and params are:`, resource, params);
    return Vue.axios.post(`${resource}`, params);
  },
  login(resource, body, params) {
    console.log(`login(resource, body, params) are:`, resource, body, params);
    return Vue.axios.post(`${resource}`, body, params);
  },
  put(resource, params) {
    console.log(`put params are:`, params);
    console.log(`put resource is:`, resource);
    return Vue.axios.put(`${resource}`, params);
  },
  delete(resource) {
    console.log(`delete resource is:`, resource);
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export const CompanyService = {
  createCompany(company) {
    return ApiService.post(`company`, company);
  },
  getCompanys() {
    return ApiService.get(`company/all`);
  },
  getCompany(companyId) {
    return ApiService.get(`company/${companyId}`);
  },
  putCompany(companyId, company) {
    return ApiService.put(`company/${companyId}`, company);
  },
  deleteCompany(companyId) {
    return ApiService.delete(`company/${companyId}`);
  },
  getInvoices(companyId) {
    return ApiService.get(`company/${companyId}/invoice/all`);
  },
  getInvoice(companyId, invoiceId) {
    return ApiService.get(`company/${companyId}/invoice/${invoiceId}`);
  }
};

export const EmployeeService = {
  createEmployee(companyId, employee) {
    return ApiService.post(`company/${companyId}/employee`, employee);
  },
  getEmployees(companyId) {
    return ApiService.get(`company/${companyId}/employee/all`);
  },
  getEmployee(companyId, employeeId) {
    return ApiService.get(`company/${companyId}/employee/${employeeId}`);
  },
  putEmployee(companyId, employeeId, employee) {
    return ApiService.put(
      `company/${companyId}/employee/${employeeId}`,
      employee
    );
  },
  deleteEmployee(companyId, employeeId) {
    return ApiService.delete(`company/${companyId}/employee/${employeeId}`);
  },
  getReservations(companyId, employeeId) {
    return ApiService.get(
      `company/${companyId}/employee/${employeeId}/reservation/all`
    );
  },
  getReservation(companyId, employeeId, reservationId) {
    return ApiService.get(
      `company/${companyId}/employee/${employeeId}/reservation/${reservationId}`
    );
  }
};

export const ReservationService = {
  createReservation(companyId, reservation) {
    return ApiService.post(`company/${companyId}/reservation`, reservation);
  },
  getReservations(companyId) {
    return ApiService.get(`company/${companyId}/reservation/all`);
  },
  getReservation(companyId, reservationId) {
    return ApiService.get(`company/${companyId}/reservation/${reservationId}`);
  },
  putReservation(companyId, reservationId, reservation) {
    return ApiService.put(
      `company/${companyId}/reservation/${reservationId}`,
      reservation
    );
  },
  deleteReservation(companyId, reservationId) {
    return ApiService.delete(
      `company/${companyId}/reservation/${reservationId}`
    );
  }
};

export const DriverService = {
  createDriver(driver) {
    return ApiService.post(`driver`, driver);
  },
  getDrivers() {
    return ApiService.get(`driver/all`);
  },
  getDriver(driverId) {
    return ApiService.get(`driver/${driverId}`);
  },
  putDriver(driverId, driver) {
    return ApiService.put(`driver/${driverId}`, driver);
  },
  deleteDriver(driverId) {
    return ApiService.delete(`driver/${driverId}`);
  },
  getReservations(driverId) {
    return ApiService.get(`driver/${driverId}/reservation/all`);
  },
  getReservation(driverId, reservationId) {
    return ApiService.get(`driver/${driverId}/reservation/${reservationId}`);
  },
  putReservation(driverId, reservationId, reservation) {
    return ApiService.put(
      `driver/${driverId}/reservation/${reservationId}`,
      reservation
    );
  }
};

export const AdminService = {
  postInvoice(reservationId, invoice) {
    return ApiService.post(
      `admin/reservation/${reservationId}/invoice`,
      invoice
    );
  },
  getInvoices() {
    return ApiService.get(`admin/invoice/all`);
  },
  getInvoice(invoiceId) {
    return ApiService.get(`admin/invoice/${invoiceId}`);
  },
  putInvoice(reservationId, invoiceId, invoice) {
    return ApiService.put(
      `admin/reservation/${reservationId}/invoice/${invoiceId}`,
      invoice
    );
  },

  deleteInvoice(reservationId, invoiceId) {
    return ApiService.delete(
      `admin/reservation/${reservationId}/invoice/${invoiceId}`
    );
  },
  getReservations() {
    return ApiService.get(`admin/reservation/all`);
  },
  getReservation(reservationId) {
    return ApiService.get(`admin/reservation/${reservationId}`);
  },
  putReservation(reservationId, reservation) {
    return ApiService.put(`admin/reservation/${reservationId}`, reservation);
  },
  



};

export const InvoiceService = {
  createInvoice(reservationId, invoice) {
    return ApiService.post(
      `admin/reservation/${reservationId}/invoice`,
      invoice
    );
  },
  getInvoices(reservationId) {
    return ApiService.get(`admin/reservation/${reservationId}/invoice/all`);
  },
  putInvoice(reservationId, invoiceId, invoice) {
    return ApiService.put(
      `admin/reservation/${reservationId}/invoice/${invoiceId}`,
      invoice
    );
  },
  deleteInvoice(reservationId, invoiceId) {
    return ApiService.delete(
      `admin/reservation/${reservationId}/invoice/${invoiceId}`
    );
  }
};

export const SecretaryService = {
  createSecretary(companyId, secretary) {
    return ApiService.post(`company/${companyId}/secretary`, secretary);
  },
  getSecretarys(companyId) {
    return ApiService.get(`company/${companyId}/secretary/all`);
  },
  getSecretary(companyId, secretaryId) {
    return ApiService.get(`company/${companyId}/secretary/${secretaryId}`);
  },
  putSecretary(companyId, secretaryId, secretary) {
    return ApiService.put(
      `company/${companyId}/secretary/${secretaryId}`,
      secretary
    );
  },
  deleteSecretary(companyId, secretaryId) {
    return ApiService.delete(`company/${companyId}/secretary/${secretaryId}`);
  },
  getReservations(companyId, secretaryId) {
    return ApiService.get(
      `company/${companyId}/secretary/${secretaryId}/reservation/all`
    );
  },
  getReservation(companyId, secretaryId, reservationId) {
    return ApiService.get(
      `company/${companyId}/secretary/${secretaryId}/reservation/${reservationId}`
    );
  }
};

export const ItineraryService = {
  createItinerary(companyId, itinerary) {
    return ApiService.post(`company/${companyId}/itinerary`, itinerary);
  },
  getItinerarys(companyId) {
    return ApiService.get(`company/${companyId}/itinerary/all`);
  },
  getItinerary(companyId, itineraryId) {
    return ApiService.get(`company/${companyId}/itinerary/${itineraryId}`);
  },
  putItinerary(companyId, itineraryId, itinerary) {
    return ApiService.put(
      `company/${companyId}/itinerary/${itineraryId}`,
      itinerary
    );
  },
  deleteItinerary(companyId, itineraryId) {
    return ApiService.delete(`company/${companyId}/itinerary/${itineraryId}`);
  }
};

export const ItineraryMasterService = {
  createItineraryMaster(itineraryMaster) {
    return ApiService.post(`itinerary_master`, itineraryMaster);
  },
  getItineraryMasters() {
    return ApiService.get(`itinerary_master/all`);
  },
  getItineraryMaster(itineraryMasterId) {
    return ApiService.get(`itinerary_master/${itineraryMasterId}`);
  },
  putItineraryMaster(itineraryMasterId, itineraryMaster) {
    return ApiService.put(
      `itinerary_master/${itineraryMasterId}`,
      itineraryMaster
    );
  },
  deleteItineraryMaster(itineraryMasterId) {
    return ApiService.delete(`itinerary_master/${itineraryMasterId}`);
  }
};

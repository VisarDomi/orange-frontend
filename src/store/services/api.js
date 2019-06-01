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
  login(resource, params) {
    console.log(`login resource and params are:`, resource, params);
    return Vue.axios.post(`${resource}`, {}, params);
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

// invoice admin
export const AdminInvoiceService = {
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
  }
};

// invoice company
export const CompanyInvoiceService = {
  getInvoices(companyId) {
    return ApiService.get(`company/${companyId}/invoice/all`);
  },
  getInvoice(companyId, invoiceId) {
    return ApiService.get(`company/${companyId}/invoice/${invoiceId}`);
  }
};

export const ItemService = {
  postItem(reservationId, invoiceId, item) {
    return ApiService.post(
      `admin/reservation/${reservationId}/invoice/${invoiceId}/item`,
      item
    );
  },
  getItems(reservationId, invoiceId) {
    return ApiService.get(
      `admin/reservation/${reservationId}/invoice/${invoiceId}/item/all`
    );
  },
  getItem(reservationId, invoiceId, itemId) {
    return ApiService.get(
      `admin/reservation/${reservationId}/invoice/${invoiceId}/item/${itemId}`
    );
  },
  putItem(reservationId, invoiceId, itemId, item) {
    return ApiService.put(
      `admin/reservation/${reservationId}/invoice/${invoiceId}/item/${itemId}`,
      item
    );
  },
  deleteItem(reservationId, invoiceId, itemId) {
    return ApiService.delete(
      `admin/reservation/${reservationId}/invoice/${invoiceId}/item/${itemId}`
    );
  }
};

export const UserService = {
  createUser(user) {
    return ApiService.post("user", user);
  },
  getUsers() {
    return ApiService.get(`user/all`);
  },
  getUser(userId) {
    return ApiService.get(`user/${userId}`);
  },
  putUser(userId, user) {
    return ApiService.put(`user/${userId}`, user);
  },
  deleteUser(userId) {
    return ApiService.delete(`user/${userId}`);
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
  }
};

// reservation company
export const CompanyReservationService = {
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

// reservation admin
export const AdminReservationService = {
  getReservations() {
    return ApiService.get(`admin/reservation/all`);
  },
  getReservation(reservationId) {
    return ApiService.get(`admin/reservation/${reservationId}`);
  },
  putReservation(reservationId, reservation) {
    return ApiService.put(`admin/reservation/${reservationId}`, reservation);
  }
};

export const DriverService = {
  createDriver(driver) {
    return ApiService.post(`admin/driver`, driver);
  },
  getDrivers() {
    return ApiService.get(`admin/driver/all`);
  },
  getDriver(driverId) {
    return ApiService.get(`admin/driver/${driverId}`);
  },
  putDriver(driverId, driver) {
    return ApiService.put(`admin/driver/${driverId}`, driver);
  },
  deleteDriver(driverId) {
    return ApiService.delete(`admin/driver/${driverId}`);
  }
};

// export const MediaService = {
//   getPicture(userId) {
//     return ApiService.get(`user/${userId}/media/all`);
//   },
//   getCommunicationMedia(communicationId) {
//     return ApiService.get(`officialcommunication/${communicationId}/media/all`);
//   },
//   postProfileMedia(userId, media) {
//     return ApiService.post(`user/${userId}/media`, media);
//   },
//   postEducationMedia(userId, educationId, media) {
//     return ApiService.post(
//       `user/${userId}/education/${educationId}/media`,
//       media
//     );
//   },
//   postExperienceMedia(userId, experienceId, media) {
//     return ApiService.post(
//       `user/${userId}/experience/${experienceId}/media`,
//       media
//     );
//   },
//   postSkillMedia(userId, skillId, media) {
//     return ApiService.post(`user/${userId}/skill/${skillId}/media`, media);
//   }
// };

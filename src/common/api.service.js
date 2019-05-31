import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

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
    let token = JwtService.getToken();
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

export const InvoiceService = {
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
  createEmployee(employee, companyId) {
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

export const ReservationService = {
  createReservation(reservation, companyId) {
    return ApiService.post(`/company/${companyId}/reservation`, reservation);
  },
  getReservations(companyId) {
    return ApiService.get(`/company/${companyId}/reservation/all`);
  },
  getReservation(companyId, reservationId) {
    return ApiService.get(`/company/${companyId}/reservation/${reservationId}`);
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

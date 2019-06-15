import { AdminService, ItemService } from "../../services/api";
import {
  CREATE_ADMIN_INVOICE,
  GET_ADMIN_INVOICE,
  GET_ADMIN_INVOICES,
  UPDATE_ADMIN_INVOICE,
  GET_ADMIN_RESERVATIONS,
  GET_ADMIN_RESERVATION,
  UPDATE_ADMIN_RESERVATION,
  GET_ADMIN_ITINERARY,
  GET_ADMIN_ITINERARYS,
  CREATE_ADMIN_ITINERARY,
  UPDATE_ADMIN_ITINERARY,
  DELETE_ADMIN_ITINERARY
} from "../../actions.type";
import {
  SET_ADMIN_INVOICES,
  SET_ADMIN_INVOICE,
  SET_ADMIN_RESERVATIONS,
  SET_ADMIN_RESERVATION,
  SET_ADMIN_ITINERARY,
  SET_ADMIN_ITINERARYS
} from "../../mutations.type";

export const actions = {
  async [CREATE_ADMIN_INVOICE](context, payload) {
    const { reservationId, invoice } = payload;
    delete payload.reservationId;
    await AdminService.postInvoice(reservationId, invoice).then(({ data }) => {
      console.log("Setting admin invoice data...");
      context.commit(SET_ADMIN_INVOICE, data);
      return data;
    });
  },

  async [GET_ADMIN_INVOICES](context, payload) {
    await AdminService.getInvoices().then(({ data }) => {
      console.log("Setting admin invoice data...");
      context.commit(SET_ADMIN_INVOICES, data);
      return data;
    });
  },

  async [GET_ADMIN_INVOICE](context, payload) {
    const { invoiceId } = payload;
    await AdminService.getInvoice(invoiceId).then(({ data }) => {
      context.commit(SET_ADMIN_INVOICE, data);
    });
  },

  async [UPDATE_ADMIN_INVOICE](context, payload) {
    const { reservationId, invoiceId, invoice } = payload;
    delete invoice.reservationId;
    delete invoice.invoiceId;
    await AdminService.putInvoice(reservationId, invoiceId, invoice).then(
      ({ data }) => {
        context.commit(SET_ADMIN_INVOICE, data);
      }
    );
  },

  async [GET_ADMIN_RESERVATIONS](context) {
    await AdminService.getReservations().then(({ data }) => {
      context.commit(SET_ADMIN_RESERVATIONS, data);
      console.log("setting reservations", data);
      return data;
    });
  },

  async [GET_ADMIN_RESERVATION](context, payload) {
    const { reservationId } = payload;
    await AdminService.getReservation(reservationId).then(({ data }) => {
      context.commit(SET_ADMIN_RESERVATION, data);
      console.log("setting reservation", data);
      return data;
    });
  },

  async [UPDATE_ADMIN_RESERVATION](context, payload) {
    const { reservationId, driverId } = payload;
    let reservation = {
      driver_id: driverId + ""
    };
    await AdminService.putReservation(reservationId, reservation).then(
      ({ data }) => {
        console.log("Setting invoice data...");
        context.commit(SET_ADMIN_RESERVATION, data);
        context.dispatch(GET_DRIVER, { driverId });
        return data;
      }
    );
  },

  async [GET_ADMIN_ITINERARYS](context) {
    await AdminService.getItinerarys().then(({ data }) => {
      context.commit(SET_ADMIN_ITINERARYS, data);
      console.log("setting itinerarys", data);
      return data;
    });
  },

  async [GET_ADMIN_ITINERARY](context, payload) {
    const { itineraryId } = payload;
    await AdminService.getItinerary(itineraryId).then(({ data }) => {
      console.log("Setting admin itinerary data...");
      context.commit(SET_ADMIN_ITINERARY, data);
      return data;
    });
  },

  async [CREATE_ADMIN_ITINERARY](context, payload) {
    await AdminService.createItinerary(payload).then(({ data }) => {
      console.log("Setting admin itinerary data...");
      context.commit(SET_ADMIN_ITINERARY, data);
      return data;
    });
  },

  async [UPDATE_ADMIN_ITINERARY](context, payload) {
    const { itineraryId, itinerary } = payload;

    await AdminService.putItinerary(itineraryId, itinerary).then(({ data }) => {
      console.log("setting itinerary data...");
      context.commit(SET_ADMIN_ITINERARY, data);
      return data;
    });
  },

  async [DELETE_ADMIN_ITINERARY](context, payload) {
    const { itineraryId } = payload;
    await AdminService.deleteItinerary(itineraryId).then(({ data }) => {
      console.log("deleting itinerary data...");
      context.commit(SET_ADMIN_ITINERARY, data);
      return data;
    });
  }
};

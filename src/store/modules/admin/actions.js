import { AdminService, ItineraryService, InvoiceService } from "../../services/api";
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
    await InvoiceService.postInvoice(reservationId, invoice).then(({ data }) => {
      context.commit(SET_ADMIN_INVOICE, data);
    });
  },
  async [GET_ADMIN_INVOICES](context, payload) {
    await AdminService.getInvoices().then(({ data }) => {
      context.commit(SET_ADMIN_INVOICES, data);
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
    await InvoiceService.putInvoice(reservationId, invoiceId, invoice).then(
      ({ data }) => {
        context.commit(SET_ADMIN_INVOICE, data);
      }
    );
  },

  async [GET_ADMIN_RESERVATIONS](context, payload) {
    await AdminService.getReservations().then(({ data }) => {
      context.commit(SET_ADMIN_RESERVATIONS, data);
    });
  },
  async [GET_ADMIN_RESERVATION](context, payload) {
    const { reservationId } = payload;
    await AdminService.getReservation(reservationId).then(({ data }) => {
      context.commit(SET_ADMIN_RESERVATION, data);
    });
  },
  async [UPDATE_ADMIN_RESERVATION](context, payload) {
    const { reservationId, reservation } = payload;
    await AdminService.putReservation(reservationId, reservation).then(
      ({ data }) => {
        context.commit(SET_ADMIN_RESERVATION, data);
      }
    );
  },

  async [CREATE_ADMIN_ITINERARY](context, payload) {
    const { companyId, itinerary } = payload;
    await ItineraryService.createItinerary(companyId, itinerary).then(({ data }) => {
      context.commit(SET_ADMIN_ITINERARY, data);
    });
  },

  async [GET_ADMIN_ITINERARYS](context, payload) {
    const { companyId } = payload;
    await ItineraryService.getItinerarys(companyId).then(({ data }) => {
      context.commit(SET_ADMIN_ITINERARYS, data);
    });
  },

  async [GET_ADMIN_ITINERARY](context, payload) {
    const { companyId, itineraryId } = payload;
    await ItineraryService.getItinerary(companyId, itineraryId).then(({ data }) => {
      context.commit(SET_ADMIN_ITINERARY, data);
    });
  },
  async [UPDATE_ADMIN_ITINERARY](context, payload) {
    const { companyId, itineraryId, itinerary } = payload;
    await ItineraryService.putItinerary(companyId, itineraryId, itinerary).then(({ data }) => {
      context.commit(SET_ADMIN_ITINERARY, data);
    });
  },
  async [DELETE_ADMIN_ITINERARY](context, payload) {
    const { companyId, itineraryId } = payload;
    await ItineraryService.deleteItinerary(companyId, itineraryId).then(({ data }) => {
      context.commit(SET_ADMIN_ITINERARY, data);
    });
  }
};

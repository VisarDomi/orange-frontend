import { AdminService, ItemService } from "../../services/api";
import {
  CREATE_ADMIN_INVOICE,
  GET_ADMIN_INVOICE,
  GET_ADMIN_INVOICES,
  UPDATE_ADMIN_INVOICE,
  GET_ADMIN_RESERVATIONS,
  GET_ADMIN_RESERVATION,
  UPDATE_ADMIN_RESERVATION,
  GET_DRIVER
} from "../../actions.type";
import {
  SET_ADMIN_INVOICES,
  SET_ADMIN_INVOICE,
  SET_ADMIN_RESERVATIONS,
  SET_ADMIN_RESERVATION
} from "../../mutations.type";

export const actions = {
  async [CREATE_ADMIN_INVOICE](context, payload) {
    const { reservationId, invoice } = payload;
    delete invoice.ref
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
      console.log("Setting admin invoice data...");
      context.commit(SET_ADMIN_INVOICE, data);
      return data;
    });
  },

  async [UPDATE_ADMIN_INVOICE](context, payload) {
    const { reservationId, invoiceId, invoice, items } = payload;
    delete invoice.id;
    delete invoice.reservation_id;
    await AdminService.putInvoice(reservationId, invoiceId, invoice).then(
      ({ data }) => {
        console.log("Setting admin invoice data...");
        context.commit(SET_ADMIN_INVOICE, data);
        return data;
      }
    );
    for (let item of items) {
      delete item.serial;
      console.log("trying to post item: ", item);
      item.name = "";
      await ItemService.postItem(reservationId, invoiceId, item).then(
        ({ data }) => {
          console.log("Finished posting item ", item);
          console.log("Returning data ", data);
        }
      );
    }
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
  }
};

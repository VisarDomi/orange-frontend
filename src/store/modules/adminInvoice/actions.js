import { AdminInvoiceService, ItemService } from "../../services/api";
import {
  CREATE_ADMIN_INVOICE,
  GET_ADMIN_INVOICE,
  GET_ADMIN_INVOICES,
  UPDATE_ADMIN_INVOICE
} from "../../actions.type";
import { SET_ADMIN_INVOICES, SET_ADMIN_INVOICE } from '../../mutations.type';

export const actions = {
  async [CREATE_ADMIN_INVOICE](context, payload) {
    const { reservationId, invoice } = payload;
    await AdminInvoiceService.postInvoice(reservationId, invoice).then(
      ({ data }) => {
        console.log("Setting admin invoice data...");
        context.commit(SET_ADMIN_INVOICE, data);
        return data;
      }
    );
  },

  async [GET_ADMIN_INVOICES](context, payload) {
    await AdminInvoiceService.getInvoices().then(({ data }) => {
      console.log("Setting admin invoice data...");
      context.commit(SET_ADMIN_INVOICES, data);
      return data;
    });
  },

  async [GET_ADMIN_INVOICE](context, payload) {
    const { invoiceId } = payload;
    await AdminInvoiceService.getInvoice(invoiceId).then(({ data }) => {
      console.log("Setting admin invoice data...");
      context.commit(SET_ADMIN_INVOICE, data);
      return data;
    });
  },

  async [UPDATE_ADMIN_INVOICE](context, payload) {
    const { reservationId, invoiceId, invoice, items } = payload;
    delete invoice.id;
    delete invoice.reservation_id;
    await AdminInvoiceService.putInvoice(reservationId, invoiceId, invoice).then(
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
  }
};

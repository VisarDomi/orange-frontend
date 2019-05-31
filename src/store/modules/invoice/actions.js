import { InvoiceService, ItemService } from "@/common/api.service";
import {
  CREATE_INVOICE,
  GET_INVOICE,
  GET_INVOICES,
  UPDATE_INVOICE
} from "../../actions.type";
import { SET_INVOICES, SET_INVOICE } from "../../mutations.type";

export const actions = {
  async [CREATE_INVOICE](context, payload) {
    const { reservationId, invoice } = payload;
    await InvoiceService.postInvoice(reservationId, invoice).then(
      ({ data }) => {
        console.log("Setting invoice data...");
        context.commit(SET_INVOICE, data);
        return data;
      }
    );
  },

  async [GET_INVOICES](context, payload) {
    await InvoiceService.getInvoices().then(({ data }) => {
      console.log("Setting invoice data...");
      context.commit(SET_INVOICES, data);
      return data;
    });
  },

  async [GET_INVOICE](context, payload) {
    const { invoiceId } = payload;
    await InvoiceService.getInvoice(invoiceId).then(({ data }) => {
      console.log("Setting invoice data...");
      context.commit(SET_INVOICE, data);
      return data;
    });
  },

  async [UPDATE_INVOICE](context, payload) {
    const { reservationId, invoiceId, invoice, items } = payload;
    delete invoice.id;
    delete invoice.reservation_id;
    await InvoiceService.putInvoice(reservationId, invoiceId, invoice).then(
      ({ data }) => {
        console.log("Setting invoice data...");
        context.commit(SET_INVOICE, data);
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

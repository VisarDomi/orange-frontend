import { InvoiceService } from "@/common/api.service";
import { CREATE_INVOICE } from "../../actions.type";
import { UPDATE_INVOICE } from "../../actions.type";
import { SET_INVOICE } from "../../mutations.type";
import { GET_INVOICE } from "../../actions.type";

export const actions = {
  async [CREATE_INVOICE](context, payload) {
    const { reservationId, invoice } = payload;
    await InvoiceService.postInvoice(reservationId, invoice).then(({ data }) => {
        console.log("Setting invoice data...")
        context.commit(SET_INVOICE, data);
        return data;
    });
  },
  async [UPDATE_INVOICE](context, payload) {
    const { reservationId, invoiceId, invoice, items } = payload;
    delete invoice.id;
    delete invoice.reservation_id;
    await InvoiceService.putInvoice(reservationId, invoiceId, invoice).then(({ data }) => {
        console.log("Setting invoice data...")
        context.commit(SET_INVOICE, data);
        return data;
    });
    for (var item in items){
        delete items[item].serial
        console.log("trying to post item: ", items[item])
        items[item].name = ""
        await InvoiceService.postInvoiceItem(reservationId, invoiceId, items[item]).then(({data})=>{
            console.log("Finished posting item ", items[item])
        })
    } 

  },
  async [GET_INVOICE](context, payload) {
    const { invoiceId } = payload;
    await InvoiceService.getInvoice(invoiceId).then(({ data }) => {
        console.log("Setting invoice data...")
        context.commit(SET_INVOICE, data);
        return data;
    });
  }
};

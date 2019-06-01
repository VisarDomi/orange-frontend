import { CompanyInvoiceService } from "./../../services/api.service";
import { GET_COMPANY_INVOICES, GET_COMPANY_INVOICE } from "./../../actions.type";
import {
  SET_COMPANY_INVOICES,
  SET_COMPANY_INVOICE
} from "./../../mutations.type";
import { UserStorageService } from './../../services/userstorage.service';

export const actions = {
  async [GET_COMPANY_INVOICES](context, payload) {
    let companyId = UserStorageService.getUser().role_id;
    console.log("companyID is: ", companyId)
    await CompanyInvoiceService.getInvoices(companyId).then(({ data }) => {
      console.log("Setting invoice data...");
      context.commit(SET_COMPANY_INVOICES, data);
      return data;
    });
  },

  async [GET_COMPANY_INVOICE](context, payload) {
    const { invoiceId } = payload;
    let companyId = UserStorageService.getUser().role_id;
    await CompanyInvoiceService.getInvoice(companyId, invoiceId).then(
      ({ data }) => {
        console.log("Setting invoice data...");
        context.commit(SET_COMPANY_INVOICE, data);
        return data;
      }
    );
  }
};

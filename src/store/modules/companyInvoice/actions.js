import { CompanyInvoiceService } from "../../services/api";
import { GET_COMPANY_INVOICES, GET_COMPANY_INVOICE } from "../../actions.type";
import {
  SET_COMPANY_INVOICES,
  SET_COMPANY_INVOICE
} from "../../mutations.type";
import { getUser } from '../../services/userstorage';

export const actions = {
  async [GET_COMPANY_INVOICES](context, payload) {
    console.log(" getUser()",  getUser())
    console.log(" getUser().role_id",  getUser().role_id)
    let companyId = getUser().role_id;
    console.log("companyID is: ", companyId)
    await CompanyInvoiceService.getInvoices(companyId).then(({ data }) => {
      console.log("Setting invoice data...");
      context.commit(SET_COMPANY_INVOICES, data);
      return data;
    });
  },

  async [GET_COMPANY_INVOICE](context, payload) {
    const { invoiceId } = payload;
    let companyId = getUser().role_id;
    await CompanyInvoiceService.getInvoice(companyId, invoiceId).then(
      ({ data }) => {
        console.log("Setting invoice data...");
        context.commit(SET_COMPANY_INVOICE, data);
        return data;
      }
    );
  }
};

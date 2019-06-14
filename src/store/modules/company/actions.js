import {
  CREATE_COMPANY,
  GET_COMPANYS,
  GET_COMPANY,
  UPDATE_COMPANY,
  CREATE_COMPANY_RESERVATION,
  GET_COMPANY_RESERVATIONS,
  GET_COMPANY_RESERVATION,
  GET_COMPANY_INVOICES,
  GET_COMPANY_INVOICE
  // GET_COMPANY_ITINERARY,
  // GET_COMPANY_ITINERARYS,
  // CREATE_COMPANY_ITINERARY,
  // UPDATE_COMPANY_ITINERARY,
  // DELETE_COMPANY_ITINERARY
} from "../../actions.type";
import {
  SET_COMPANYS,
  SET_COMPANY,
  SET_COMPANY_RESERVATIONS,
  SET_COMPANY_RESERVATION,
  SET_COMPANY_INVOICES,
  SET_COMPANY_INVOICE
  // SET_COMPANY_ITINERARY,
  // SET_COMPANY_ITINERARYS
} from "../../mutations.type";
import {
  ReservationService,
  CompanyService
  // ItineraryService
} from "../../services/api";

export const actions = {
  async [CREATE_COMPANY](context, company) {
    await CompanyService.createCompany(company);
  },

  async [GET_COMPANYS](context, payload) {
    await CompanyService.getCompanys().then(({ data }) => {
      context.commit(SET_COMPANYS, data);
    });
  },

  async [GET_COMPANY](context, payload) {
    const { companyId } = payload;
    await CompanyService.getCompany(companyId).then(({ data }) => {
      context.commit(SET_COMPANY, data);
    });
  },

  async [UPDATE_COMPANY](context, payload) {
    const { companyId } = payload;
    delete payload.companyId;
    await CompanyService.putCompany(companyId, payload).then(({ data }) => {
      context.commit(SET_COMPANY, data);
      return data;
    });
  },

  async [CREATE_COMPANY_RESERVATION](context, payload) {
    // const { reservation } = payload; //not needed, left for artifact reasons
    console.log("paylaod in action of create reservaton: ", payload);
    const { companyId } = payload;
    delete payload.companyId;
    payload.status = "unassigned";
    await ReservationService.createReservation(companyId, payload).then(
      ({ data }) => {
        return data;
      }
    );
  },

  async [GET_COMPANY_RESERVATIONS](context) {
    const { companyId } = payload;
    await ReservationService.getReservations(companyId).then(({ data }) => {
      context.commit(SET_COMPANY_RESERVATIONS, data);
      console.log("setting reservations", data);
      return data;
    });
  },

  async [GET_COMPANY_RESERVATION](context, payload) {
    const { companyId, reservationId } = payload;
    await ReservationService.getReservation(companyId, reservationId).then(
      ({ data }) => {
        context.commit(SET_COMPANY_RESERVATION, data);
      }
    );
  },

  async [GET_COMPANY_INVOICES](context, payload) {
    const { companyId } = payload;
    await CompanyService.getInvoices(companyId).then(({ data }) => {
      context.commit(SET_COMPANY_INVOICES, data);
    });
  },

  async [GET_COMPANY_INVOICE](context, payload) {
    const { companyId, invoiceId } = payload;
    await CompanyService.getInvoice(companyId, invoiceId).then(({ data }) => {
      context.commit(SET_COMPANY_INVOICE, data);
    });
  }

  // async [CREATE_COMPANY_ITINERARY](context, payload) {
  //   const { companyId } = payload;
  //   // delete payload.editable;
  //   delete payload.companyId;
  //   await ItineraryService.createItinerary(companyId, payload).then(
  //     ({ data }) => {
  //       console.log("Setting admin itinerary data...");
  //       context.commit(SET_COMPANY_ITINERARY, data);
  //       console.log("data to be returned", data);
  //       return data;
  //     }
  //   );
  // },

  // async [GET_COMPANY_ITINERARYS](context, payload) {
  //   const { companyId } = payload;
  //   await ItineraryService.getItinerarys(companyId).then(({ data }) => {
  //     context.commit(SET_COMPANY_ITINERARYS, data);
  //     console.log("setting itinerarys", data);
  //     return data;
  //   });
  // },

  // async [GET_COMPANY_ITINERARY](context, payload) {
  //   const { itineraryId } = payload;
  //   await ItineraryService.getItinerary(itineraryId).then(({ data }) => {
  //     console.log("Setting admin itinerary data...");
  //     context.commit(SET_COMPANY_ITINERARY, data);
  //     return data;
  //   });
  // },

  // async [UPDATE_COMPANY_ITINERARY](context, payload) {
  //   const { company_id, id } = payload;
  //   delete payload.company_id;
  //   delete payload.id;
  //   await ItineraryService.putItinerary(company_id, id, payload).then(
  //     ({ data }) => {
  //       console.log("setting itinerary data...");
  //       context.commit(SET_COMPANY_ITINERARY, data);
  //       return data;
  //     }
  //   );
  // },

  // async [DELETE_COMPANY_ITINERARY](context, payload) {
  //   const { companyId, itineraryId } = payload;
  //   await ItineraryService.deleteItinerary(companyId, itineraryId).then(
  //     ({ data }) => {
  //       console.log("deleting itinerary data...");
  //       context.commit(SET_COMPANY_ITINERARY, data);
  //       return data;
  //     }
  //   );
  // }
};

import {
  CREATE_SECRETARY,
  GET_SECRETARYS,
  GET_SECRETARY,
  UPDATE_SECRETARY,
  DELETE_SECRETARY,
  GET_SECRETARY_RESERVATIONS,
  GET_SECRETARY_RESERVATION
} from "../../actions.type";
import {
  SET_SECRETARYS,
  SET_SECRETARY,
  SET_SECRETARY_RESERVATIONS,
  SET_SECRETARY_RESERVATION
} from "../../mutations.type";
import { SecretaryService } from "../../services/api";

export const actions = {
  async [CREATE_SECRETARY](context, payload) {
    const {company_id, secretary} = payload
    await SecretaryService.createSecretary(company_id, secretary).then(({data}) => {
      context.commit(SET_SECRETARY, data)
    })
  },

  async [GET_SECRETARY](context, payload) {
    const { secretaryId, company_id } = payload;
    await SecretaryService.getSecretary(company_id, secretaryId).then(({ data }) => {
      context.commit(SET_SECRETARY, data);
    });
  },

  async [UPDATE_SECRETARY](context, payload) {
    const { secretaryId, company_id, secretary } = payload;
    delete payload.secretaryId;
    await SecretaryService.putSecretary(company_id, secretaryId, secretary).then(({ data }) => {
      context.commit(SET_SECRETARY, data);
    });
  },

  async [DELETE_SECRETARY](context, payload) {
    const { secretaryId, company_id } = payload;
    await SecretaryService.deleteSecretary(company_id, secretaryId).then(({ data }) => {
      context.commit(SET_SECRETARY, data);
    });
  },

  async [GET_SECRETARYS](context, payload) {
    const {company_id} = payload
    await SecretaryService.getSecretarys(company_id).then(({ data }) => {
      context.commit(SET_SECRETARYS, data);
    });
  },

  async [GET_SECRETARY_RESERVATIONS](context, payload) {
    const { secretaryId, company_id } = payload
    await SecretaryService.getReservations(company_id, secretaryId).then(({ data }) => {
      context.commit(SET_SECRETARY_RESERVATIONS, data);
    });
  },

  async [GET_SECRETARY_RESERVATION](context, payload) {
    const { secretaryId, company_id, reservationId } = payload;
    await SecretaryService.getReservation(company_id, secretaryId, reservationId).then(
      ({ data }) => {
        context.commit(SET_SECRETARY_RESERVATION, data);
      }
    );
  },

};

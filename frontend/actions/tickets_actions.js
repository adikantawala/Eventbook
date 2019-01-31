import * as APIUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = 'RECEIVE_TICKET';

export const receiveTicket = (payload) => ({
  type: RECEIVE_TICKET,
  payload
});

export const createTicket = (ticket) => dispatch => {
  return APIUtil.purchase(ticket)
    .then( ticket => dispatch( receiveTicket(ticket) ) )
};

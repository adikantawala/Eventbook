import * as APIUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET'

export const receiveTicket = (payload) => ({
  type: RECEIVE_TICKET,
  payload
});

export const removeTicket = (id, userId) => {
  return {
    type: REMOVE_TICKET,
    ticketId: id,
    userId: userId
  }
}

export const createTicket = (ticket) => dispatch => {
  return APIUtil.purchase(ticket)
    .then( ticket => dispatch( receiveTicket(ticket) ) )
};

export const deleteTicket = (id, userId) => dispatch => {
  return APIUtil.deleteTicket(id, userId)
    .then( () => dispatch( removeTicket(id, userId) ) )
};

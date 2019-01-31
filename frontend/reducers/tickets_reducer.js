import merge from 'lodash/merge';

import {
  RECEIVE_TICKET
} from '../actions/tickets_actions';

const ticketsReducer = (state = {}, action) => {
  Object.freeze(state);
  let ticket;
  switch(action.type) {
    case RECEIVE_TICKET:
      ticket = action.payload.ticket
      return merge({}, state, {[ticket.id]: ticket});
    default:
      return state;
  }
}

export default ticketsReducer;

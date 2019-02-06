import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_EVENT} from '../actions/events_actions';
import { REMOVE_TICKET} from '../actions/tickets_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case REMOVE_EVENT:
      newState = Object.assign({}, state);
      delete newState[action.userId].events[action.eventId];
      let eventIndex = newState[action.userId].createdEventIds.indexOf(action.eventId)
      newState[action.userId].createdEventIds.splice(eventIndex,1)
      return newState;
    case REMOVE_TICKET:
      newState = Object.assign({}, state);
      delete newState[action.userId].tickets[action.ticketId];
      let ticketIndex = newState[action.userId].ticketIds.indexOf(action.ticketId)
      newState[action.userId].ticketIds.splice(ticketIndex,1)
      return newState;
    default:
      return state;
  }
};

export default usersReducer;

import merge from 'lodash/merge';

import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT} from '../actions/events_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let event;
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      event = action.payload.event
      return merge({}, state, {[event.id]: event});
    default:
      return state;
  }
};

export default eventsReducer;

import merge from 'lodash/merge';

import { RECEIVE_EVENTS, RECEIVE_EVENT} from '../actions/events_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      const newEvent = { [action.event.id]: action.event };
      return merge({}, state, newEvent);
    default:
      return state;
  }
};

export default eventsReducer;

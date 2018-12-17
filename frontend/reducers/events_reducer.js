import merge from 'lodash/merge';

import { RECEIVE_EVENTS } from '../actions/events_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
};

export default eventsReducer;

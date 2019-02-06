import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_EVENT} from '../actions/events_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case REMOVE_EVENT:
      let newState = Object.assign({}, state);
      console.log(newState)
      console.log(action.userId)
      console.log(action.eventId)
      delete newState[action.userId].events[action.eventId];
      let index = newState[action.userId].createdEventIds.indexOf(action.eventId)
      newState[action.userId].createdEventIds.splice(index,1)
      return newState;
    default:
      return state;
  }
};

export default usersReducer;

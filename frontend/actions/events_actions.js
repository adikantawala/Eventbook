import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';


export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events,
});

export const receiveEvent = ( payload) => ({
  type: RECEIVE_EVENT,
  payload
});


export const fetchEvents = () => dispatch => (
  APIUtil.fetchEvents().then(events => (
    dispatch(receiveEvents(events))
  ))
);

export const fetchEvent = id => dispatch => (
  APIUtil.fetchEvent(id).then(payload => (
    dispatch(receiveEvent(payload))
  ))
);


export const createEvent = (event) => dispatch => {
  return APIUtil.createEvent(event)
    .then( event => dispatch( receiveEvent(event) ) )
};

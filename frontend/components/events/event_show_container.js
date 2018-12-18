import { connect } from 'react-redux';

import { fetchEvent } from '../../actions/events_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  let event = [];

  if (state.entities.events[ownProps.match.params.eventId]) {
    event = state.entities.events[ownProps.match.params.eventId];
  }

  return ({
  eventId:ownProps.match.params.eventId,
  event: event,
  currentUser: state.session.currentUser,
})
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);

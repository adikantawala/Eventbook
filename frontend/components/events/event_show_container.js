import { connect } from 'react-redux';

import { fetchEvent } from '../../actions/events_actions';
import EventShow from './event_show';

const mapStateToProps = state => ({
  events: state.entities.event,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);

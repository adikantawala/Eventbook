import EventIndex from './event_index.jsx'
import { connect } from 'react-redux';
import {fetchEvents} from '../../actions/events_actions'

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);

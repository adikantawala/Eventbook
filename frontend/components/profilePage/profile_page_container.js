import ProfilePage from "./profile_page";
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/session_actions';
import { deleteEvent } from '../../actions/events_actions';
import { deleteTicket } from '../../actions/tickets_actions';

const mapStateToProps = (state) => {
  return {
    user : state.entities.users,
    currentUser: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    deleteEvent: (id, userId) => dispatch(deleteEvent(id,userId)),
    deleteTicket: (id, userId) => dispatch(deleteTicket(id,userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

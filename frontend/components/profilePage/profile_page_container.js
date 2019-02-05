import ProfilePage from "./profile_page";
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    user : state.entities.users,
    currentUser: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    deleteEvent: () => dispatch(deleteEvent())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

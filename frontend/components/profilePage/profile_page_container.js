import ProfilePage from "./profile_page";
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

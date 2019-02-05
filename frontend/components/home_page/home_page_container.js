import HomePage from "./home_page"
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    events: state.entities.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

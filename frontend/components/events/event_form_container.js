import EventForm from './event_form';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/events_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => {
  return ({
    createEvent: (event) => dispatch(createEvent(event))
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);

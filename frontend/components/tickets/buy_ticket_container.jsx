import React from 'react';
import { connect } from 'react-redux';
import BuyTicket from './buy_ticket';
import { createTicket } from '../../actions/tickets_actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  createTicket : (ticket) => dispatch(createTicket(ticket))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyTicket);

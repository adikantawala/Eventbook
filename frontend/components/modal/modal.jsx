import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BuyTicketContainer from '../tickets/buy_ticket_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'ticket':
      component = <BuyTicketContainer outsideProps={modal.options}/>;
      break;
    default:
      return null;
  }

  function closeModal2() {
    return (e) => {
      e.preventDefault;
      closeModal();
    }
  }

  return (
    <div className="modal-background" onClick={closeModal2()}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

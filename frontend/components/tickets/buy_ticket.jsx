import React from 'react';
// className="buy-ticket-modal
class BuyTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_id: this.props.outsideProps.eventsProps.eventId,
      quantity: "1",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.props.fetchEvent(this.props.eventId), 0);
    window.scrollTo(0,0);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
     e.preventDefault();
     const ticket = Object.assign({}, this.state);
     this.props.createTicket(ticket)
     this.props.outsideProps.eventsProps.closeModal()
     // this.props.createEvent(formData).then(
     //   res => {
     //     this.props.history.push(`/events/${res.payload.event.id}/`);
     //   }
     // );
   }

   getEventMonth(monthNum) {
     switch (monthNum) {
       case 0:
         return 'Jan';
       case 1:
         return 'Feb';
       case 2:
         return 'Mar';
       case 3:
         return 'Apr';
       case 4:
         return 'May';
       case 5:
         return 'Jun';
       case 6:
         return 'Jul';
       case 7:
         return 'Aug';
       case 8:
         return 'Sept';
       case 9:
         return 'Oct';
       case 10:
         return 'Nov';
       case 11:
         return 'Dec';
       default:
         break;
     }
   }


  render() {
    let price = this.props.outsideProps.eventsProps.event.ticket_price
    let event_date = new Date(this.props.outsideProps.eventsProps.event.event_date)
    let month = this.getEventMonth(event_date.getMonth())
    const {event_id, quantity} = this.state
    return (
      <div>
        <div className="buy-ticket-modal-parent">
          <div className="buy-ticket-modal-top-bar">
            <div>
            </div>
            <p className="buy-ticket-modal-register-text">
              Register
            </p>
            <button className="buy-ticket-modal-X-close" onClick={() => this.props.outsideProps.eventsProps.closeModal()}>
              X
            </button>
          </div>
          <div className="buy-ticket-modal-middle">
            <div className="buy-ticket-modal-middle-sale">
              <p>Sale ends {month} {event_date.getDate()}</p>
            </div>
            <div className="buy-ticket-modal-middle-main">
              <div className="buy-ticket-modal-middle-blue">
              </div>
              <div className="buy-ticket-modal-middle-test">
                <div className="buy-ticket-modal-middle-flex" >
                  <p className="buy-ticket-modal-middle-gen-admin">
                    General Admission
                  </p>
                  <p className="buy-ticket-modal-middle-price">
                    ${price}
                  </p>
                </div>
                <div className="buy-ticket-modal-middle-flex">
                  <select className="buy-ticket-modal-middle-dropdown" value={quantity} onChange={this.update('quantity')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="buy-ticket-modal-bottom">
            <div className="buy-ticket-modal-bottom-spacing">
              <div>
                QTY: {quantity}
              </div>
              <div>
                Total: ${quantity * price}
              </div>
              <div>
                <button className="buy-ticket-modal-bottom-checkout" onClick={this.handleSubmit}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
export default BuyTicket;

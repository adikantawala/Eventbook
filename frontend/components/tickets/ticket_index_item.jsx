import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class TicketIndexItem extends React.Component {
  constructor (props) {
    super(props)
  }

  getWordDay(num){
    switch (num) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:
        break;
  }
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


  render (){
    let ticket_number = this.props.ticket.quantity;
    let word;
    if (ticket_number === 1){
      word = "ticket"
    } else {
      word = "tickets"
    }
    let ticket = this.props.ticket
    let url = ticket.image_url
    let event_date = new Date(ticket.date)
    let month = this.getEventMonth(event_date.getMonth())
    let day = this.getWordDay(event_date.getDay())
    let purchase_date = new Date(ticket.purchase_date)
    let purchase_month = this.getEventMonth(event_date.getMonth())
    let purchase_day = this.getWordDay(event_date.getDay())
    let deleteIcon = (!this.props.handleDeleteTicket) ? null :
    (
      <button onClick={()=> this.props.handleDeleteTicket(this.props.ticket.id)} className="profile-page-ticket-delete">
        Delete order
      </button>
    )
  return (
  <li className="profile-page-main-ticket">
    {deleteIcon}
    <div className="ticket-index-item-main">
      <div className="ticet-index-item-date-parent">
        <p className="ticket-index-month">{month}</p>
        <p className="ticket-index-day-number">{event_date.getDate()}</p>
      </div>
      <div className="ticet-index-item-pic-parent">
        <img src={url} />
        <div className="ticket-index-item-ticket-number">
          {ticket_number} {word}
        </div>
      </div>
      <div className="ticet-index-item-remaining-details">
        <div className="ticket-index-item-event-details">
          <p className="ticket-index-event-title">
            {ticket.event_title}
          </p>
        </div>
        <div className="ticket-index-item-event-details">
          <p className="ticket-index-item-event-dates">
            {day}, {month} {event_date.getDate()}
          </p>
        </div>
        <div className="ticket-index-item-event-details">
          <p className="ticket-index-item-event-dates">
            Ticket order place on: {purchase_day}, {purchase_month} {purchase_date.getDate()}
          </p>
        </div>
      </div>
    </div>
  </li>
  )
  }
}

export default TicketIndexItem;

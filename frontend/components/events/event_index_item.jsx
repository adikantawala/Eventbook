import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor (props) {
    super(props)
  }

  // switchHeart(e){
  //   e.preventDefault();
  //   let heart_state = e.target;
  //
  //   if (heart_state.classList.contains("heart")){
  //     heart_state.classList.remove("heart");
  //     heart_state.classList.add("liked-heart");
  //   } else {
  //     heart_state.classList.remove("liked-heart");
  //     heart_state.classList.add("heart");
  //   }
  // }

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
    let event_date = new Date(this.props.event.event_date)
    let month = this.getEventMonth(event_date.getMonth())
    let day = this.getWordDay(event_date.getDay())
    let url = this.props.event.image_url
    let eventLoc = this.props.event.location
    let price = this.props.event.ticket_price
    let dollar = price.split(".")[0]
    let cents = price.split(".")[1]
    if (cents.length < 2){
      cents += "0"
    }
    price = dollar + "." + cents
    let deleteIcon = (!this.props.handleDeleteEvent) ? null :
    (
      <div onClick={()=> this.props.handleDeleteEvent(this.props.event.id)} className="profile-page-event-delete">
        Delete event
      </div>
    )
  return (
  <li className="event-lists">
  <Link to={`/events/${this.props.event.id}`} className="remove-dec">
    <div >
      {deleteIcon}
      <img src={url} />

      <div onClick={this.switchHeart} className="heart">
      </div>
      <div className="event-bottom-half">

        <div>
          <p className="date-styling">{month}</p>
          <p className="number-styling">{event_date.getDate()}</p>
        </div>

        <div className="event-details">
          <p className="event-title-styling">{this.props.event.title}</p>
          <p className="event-date-location-price-styling">{day}, {month} {event_date.getDate()}, {event_date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} </p>
          <p className="event-date-location-price-styling">{eventLoc}</p>
          <p className="event-date-location-price-styling">Starting price: ${price}</p>
        </div>
      </div>
    </div>
    </Link>
  </li>
  )
  }
}

export default EventIndexItem;

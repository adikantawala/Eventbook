import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor (props) {
    super(props)
  }

  switchHeart(e){
    e.preventDefault();
    let heart_state = e.target;

    if (heart_state.classList.contains("heart")){
      heart_state.classList.remove("heart");
      heart_state.classList.add("liked-heart");
    } else {
      heart_state.classList.remove("liked-heart");
      heart_state.classList.add("heart");
    }
  }

  render (){
  return (
  <li className="event-lists">

    <div>
      <img src={window.images.generic_event} />
      <div onClick={this.switchHeart} className="heart">
      </div>
      <div className="event-bottom-half">

        <div>
          <p className="date-styling">DEC</p>
          <p className="number-styling">20</p>
        </div>

        <div className="event-details">
          <p className="event-title-styling">Really long title with tons of word to see if it will wrap around in the...</p>
          <p className="event-date-location-price-styling">{event.event_date}</p>
          <p className="event-date-location-price-styling">825 Battery St., San Francisco, CA 94124</p>
          <p className="event-date-location-price-styling">Starts at $100.00</p>
        </div>
      </div>
    </div>
  </li>
  )
  }
}

export default EventIndexItem;

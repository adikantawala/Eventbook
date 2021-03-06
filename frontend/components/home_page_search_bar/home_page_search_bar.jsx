import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class HomePageSearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  randomEvent(array){
    var eventId = array[Math.floor(Math.random()*array.length)];
    this.props.history.push(`/events/${eventId}`)
  }

  render() {

    let eventIds = this.props.eventIds
    return (
      <div className="search-bar">
        <div className="outer">
          <div className="search-box-text-l">Looking for</div>
          <input type="text"
            className="search-box-inputs"
            placeholder="Event"
          />
        </div>
        <div className="outer">
          <div className="search-box-text-m">In</div>
          <input type="text"
            id="white"
            className="search-box-inputs-two"
            placeholder="San Francisco, CA"
          />
        </div>
        <div className="outer-3">
          <div className="search-box-text-r">On</div>
          <input type="date"
          className="search-box-inputs"
          />
        </div>
        <div className="outer-last">
          <img src={window.images.search_icon} onClick={() => this.randomEvent(eventIds)} />
        </div>
      </div>
    );
  }


}
export default HomePageSearchBar;

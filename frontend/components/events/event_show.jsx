import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {ClipLoader} from 'react-spinners';


class EventShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.eventId);
    window.scrollTo(0,0);
  }

  componentDidUpdate(prevProps){
    if (prevProps.eventId !== this.props.eventId) {
      this.props.fetchEvent(this.props.eventId)

    }
    window.scrollTo(0,0);
  }

  switchHeart(e){
    e.preventDefault();
    let heart_state = e.target;

    if (heart_state.classList.contains("heart-show")){
      heart_state.classList.remove("heart-show");
      heart_state.classList.add("liked-heart-show");
    } else {
      heart_state.classList.remove("liked-heart-show");
      heart_state.classList.add("heart-show");
    }
  }

  render() {
    if (!this.props.event) {
      return(
      <ClipLoader/>
      )
    }
    let event = this.props.event
    return (
      <div>
        <div className="hide-blur">
          <div className="event-show-blurr-pic">
          </div>

        </div>
        <div className="hide-blur-2">
        </div>
        <div className="event-info">
          <div className="event-info-header">
            <div className="event-header-pic">
            </div>
            <div className="event-title-date">
              <div className="month-day-padding">
                <div className="listing-month">
                  Jan
                </div>
                <div className="listing-day">
                  20
                </div>
              </div>
              <h1 className="listing-title">
                {event.title}
              </h1>
              <div className="listing-creator">
                by: DemoUser
              </div>
              <div className="listing-price">
                Free
              </div>
            </div>
          </div>

          <div className="event-show-bar">
            <div onClick={this.switchHeart} className="heart-show">
            </div>
            <div>
              <input className="session-submit" type="submit" value="Register" />
            </div>
          </div>

          <div className="left-over">
            <div className="event-show-desc">
            <p className="event-show-desc-titles">DESCRIPTION</p>
            <p className="event-show-desc-words">{event.description}</p>
            </div>
            <div className="event-show-date-time-loc">
              <div className="event-show-date-time">
                <p className="event-show-desc-titles">DATE AND TIME</p>
                <p className="event-show-desc-dl-words">{event.event_date}</p>
              </div>
              <div className="event-show-loc">
                <p className="event-show-desc-titles">LOCATION</p>
                <p className="event-show-desc-dl-words">{event.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default EventShow;

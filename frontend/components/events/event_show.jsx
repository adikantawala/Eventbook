import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {ClipLoader} from 'react-spinners';

import EventIndexItem from './event_index_item';


class EventShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.eventId);
  }

  componentDidUpdate(prevProps){
  if (prevProps.eventId !== this.props.eventId) {
    this.props.fetchEvent(this.props.eventId)

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
          <div className="event-index-blurr-pic">
          </div>
        
        </div>
        <div className="hide-blur-2">
        </div>
        <div className="event-info">
          <div className="event-info-header">
            <div className="event-header-pic">
            </div>
            <div className="event-title-date">
            </div>
          </div>

          <div className="event-show-bar">
            <div>
              heart
            </div>
            <div>
            register button
            </div>
          </div>

          <div className="left-over">
            <div className="event-show-desc">
            desc
            </div>
            <div className="event-show-date-time-loc">
              <div className="event-show-date-time">
              date-time
              </div>
              <div className="event-show-loc">
              loc
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default EventShow;

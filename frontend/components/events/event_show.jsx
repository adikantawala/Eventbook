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

  render() {
    if (!this.props.event) {
      return(
      <ClipLoader/>
      )
    }

    return (
      <div>

        <p>{this.props.event.title}</p>
      </div>
    );
  }
};

export default EventShow;

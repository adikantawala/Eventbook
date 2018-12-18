import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import EventIndexItem from './event_index_item';


class EventShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent();
  }

  render() {
    const { event } = this.props;
    return (
      <div>
        <p>test</p>
      </div>
    );
  }
};

export default EventShow;

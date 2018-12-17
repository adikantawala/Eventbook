import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import EventIndexItem from './event_index_item';


class EventIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <section>
        <ul>
          {events.map(event => <EventIndexItem key={event.id} event={event} />)}
        </ul>
      </section>
    );
  }
};

export default EventIndex;

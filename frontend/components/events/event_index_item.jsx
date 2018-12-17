import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event }) => (
  <li>
      <span>{event.id}</span>
  </li>
);

export default EventIndexItem;

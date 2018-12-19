
import React from 'react';
import { Link } from 'react-router-dom';
import HomePageSearchBarContainer from '../home_page_search_bar/home_page_search_bar_container';
import EventIndexContainer from '../events/event_index_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="parent">
          <div className="words-over-pic">DO MORE OF WHAT YOU LOVE</div>
          <HomePageSearchBarContainer/>
        </div>
        <EventIndexContainer/>

      </div>


    );
  }


}
export default HomePage;

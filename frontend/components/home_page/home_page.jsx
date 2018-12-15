
import React from 'react';
import { Link } from 'react-router-dom';
import HomePageSearchBar from '../home_page_search_bar/home_page_search_bar'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="parent">
          <div className="words-over-pic">NEVER DO NOTHING AGAIN</div>
          <HomePageSearchBar/>
        </div>

      </div>


    );
  }


}
export default HomePage;

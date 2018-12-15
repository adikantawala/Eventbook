import React from 'react';
import { Link } from 'react-router-dom';


class HomePageSearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <img src={window.images.search_icon} />
        </div>
      </div>
    );
  }


}
export default HomePageSearchBar;

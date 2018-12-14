
import React from 'react';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="pics" src={window.images.party_pic} />
      </div>
    );
  }


}
export default HomePage;

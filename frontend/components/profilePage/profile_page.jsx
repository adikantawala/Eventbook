import React from 'react';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render(){
      return (
        <div>
          testing profile
        </div>
      )
  }
};

export default ProfilePage;

import React from 'react';
import EventIndexItem from '../events/event_index_item';
import TicketIndexItem from '../tickets/ticket_index_item';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getCurrentUser();
    window.scrollTo(0,0);
  }

  render(){
      let user = this.props.user[this.props.currentUser]
      if (!user.ticketIds) return null;
      let eventsArr = (user.createdEventIds.length === 0 ? <h1 className="profile-item-none">No Created Events</h1> :
        Object.values(user.events).map(event => <EventIndexItem key={event.id} event={event} />))

      let ticketsArr = (user.ticketIds.length === 0 ? <h1 className="profile-item-none">No purchased tickets</h1> :
        Object.values(user.tickets).map(ticket => <TicketIndexItem key={ticket.id} ticket={ticket} />))
      return (
        <div className="profile-page-parent">
          <div className="profile-page-left">
            <div className="profile-account-parent">
              <div className="profile-account-pic-parent">
                <div className="profIcon-container">
                  <img className="profIcon-shrink" src={window.images.profIcon}/>
                </div>
              </div>
              <div className="profile-page-name">
                <p>{user.first_name} {user.last_name}</p>
              </div>
              <div className="profile-page-tickets-following">
                  <p>{user.ticketIds.length} tickets</p>
                  <p>•</p>
                  <p>{user.createdEventIds.length} Created Events</p>
              </div>
            </div>
          </div>
          <div className="profile-page-right">
            <div className="profile-page-word-style">
              <p>Tickets</p>
            </div>
            <div>
              <ul className="profile-page-tickets-all">
                {ticketsArr}
              </ul>
            </div>
            <div className="profile-page-word-style">
              <p>Events created by you</p>
            </div>
            <div className="max-index-width2">
              <ul className="double">
                {eventsArr}
              </ul>
            </div>
          </div>
        </div>
      )
  }
};

export default ProfilePage;

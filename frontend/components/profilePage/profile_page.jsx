import React from 'react';
import EventIndexItem from '../events/event_index_item';
import TicketIndexItem from '../tickets/ticket_index_item';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this)
    this.handleDeleteTicket = this.handleDeleteTicket.bind(this)
  }


  componentDidMount() {
    this.props.getCurrentUser();
    window.scrollTo(0,0);
  }




  goToByScroll(id){
      $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');

  }

  handleDeleteEvent(id){
    this.props.deleteEvent(id, this.props.currentUser)
  }
  handleDeleteTicket(id){
    this.props.deleteTicket(id, this.props.currentUser)
  }



  render(){

      let user = this.props.user[this.props.currentUser]
      if (!user.ticketIds) return null;
      let eventsArr = (user.createdEventIds.length === 0 ? <h1 className="profile-item-none">No Created Events</h1> :
        Object.values(user.events).map(event => <EventIndexItem key={event.id} event={event} handleDeleteEvent={this.handleDeleteEvent} />))

      let ticketsArr = (user.ticketIds.length === 0 ? <h1 className="profile-item-none">No purchased tickets</h1> :
        Object.values(user.tickets).reverse().map(ticket => <TicketIndexItem key={ticket.id} ticket={ticket} handleDeleteTicket={this.handleDeleteTicket}/>))
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
                  <p onClick={() => this.goToByScroll("tickets")}>{user.ticketIds.length} tickets</p>
                  <span>•</span>
                  <p onClick={() => this.goToByScroll("createdEvents")}>{user.createdEventIds.length} Created Events</p>
              </div>
            </div>
          </div>
          <div className="profile-page-right">
            <div className="profile-page-word-style">
              <p id="tickets">Tickets</p>
            </div>
            <div>
              <ul className="profile-page-tickets-all">
                {ticketsArr}
              </ul>
            </div>
            <div className="profile-line-cool">
            </div>
            <div className="profile-page-word-style">
              <p id="createdEvents">Events created by you</p>
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

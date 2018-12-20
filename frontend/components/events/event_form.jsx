import React from 'react';
import { Link } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_date: "",
      location: "",
      title: "",
      description:"",
      category_id: "1"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
     e.preventDefault();
     const event = Object.assign({}, this.state);
     this.props.createEvent(event).then(
       res => {
         this.props.history.push(`/events/${res.payload.event.id}/`);
       }
     );
   }


  render () {
    const {title, description, event_date, location, category_id} = this.state
    return (
         <div>
         <form className="new-form" onSubmit={this.handleSubmit}>
           <label>title</label>
           <input
             type="text"
             value={title}
             onChange={this.update('title')}
             className="event-field"
           />
           <br />
           <label>description</label>
           <textarea
             value={description}
             onChange={this.update('description')}
             className="event-field"
           />
           <br />
           <label>location</label>
           <textarea
             value={location}
             onChange={this.update('location')}
             className="event-field"
           />
           <br />
           <label>cat id</label>
           <input
             min="0"
             type="number"
             value={category_id}
             onChange={this.update('category_id')}
             className="event-field"
           />
           <br />
           <br />
           <label>event date</label>
           <input
             type="date"
             value={event_date}
             onChange={this.update('event_date')}
             className="event-field"
           />
           <br />
             <div className="create-submit-button">
               <input
                 type="submit"
                 value="Create Event"
                 className="new-submit-button"
               />
             </div>
         </form>
         </div>
       )
     }
}


export default EventForm

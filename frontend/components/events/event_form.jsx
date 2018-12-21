import React from 'react';
import { Link } from 'react-router-dom';
// <label>event date</label>
// <input
//   type="date"
//   value={event_date}
//   onChange={this.update('event_date')}
//   className="event-field"
// />
// <label>cat id</label>
// <input
//   min="0"
//   type="number"
//   value={category_id}
//   onChange={this.update('category_id')}
//   className="event-field"
// />
class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_date: "",
      location: "",
      title: "",
      description:"",
      category_id: "1",
      photoFile: null,
      photoUrl: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }


  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {

     e.preventDefault();
     const event = Object.assign({}, this.state);
     const { title, description, location, event_date, category_id} = event;

     let newDate = new Date(new Date(event_date).getTime()+new Date(event_date).getTimezoneOffset()*60*1000);
     let offset = new Date(event_date).getTimezoneOffset() / 60;
     var hours = new Date(event_date).getHours();
     newDate.setHours(hours);
     newDate = newDate.toString();

     const formData = new FormData();
     formData.append('event[title]', title);
     formData.append('event[description]', description);
     formData.append('event[location]', location);
     formData.append('event[event_date]', newDate);
     formData.append('event[category_id]', category_id);
     if (this.state.photoFile) {
        formData.append('event[pic]', this.state.photoFile);
      }
     this.props.createEvent(formData).then(
       res => {
         this.props.history.push(`/events/${res.payload.event.id}/`);
       }
     );
   }


  render () {

    const {title, description, event_date, location, category_id, photoUrl} = this.state
    const preview = photoUrl ? <img height="100px" width="100px" src={photoUrl} /> : null;
    return (
         <div>
         <h1>Create Event</h1>
         <form className="" onSubmit={this.handleSubmit}>
         <div>

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
          </div>
           <br />
           <label>location</label>
           <input
            type="text"
             value={location}
             onChange={this.update('location')}
             className="event-field"
           />
           <br />

           <br />
           <br />

           <label>event date time</label>
           <input
             type="datetime-local"
             value={event_date}
             onChange={this.update('event_date')}
             className="event-field"
           />
           <br />
           <div className="button-holder">
              <h3>Image preview </h3>
              {preview}
              <h3 className="button-holder">Add a Picture</h3>
              <input type="file" className="new-bench-button"
                onChange={this.handleFile.bind(this)}/>
            </div>
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

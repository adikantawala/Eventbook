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
      ticket_price:"",
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
     const { title, description, location, event_date, category_id, ticket_price} = event;
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
     formData.append('event[ticket_price]', ticket_price);
     if (this.state.photoFile) {
        formData.append('event[pic]', this.state.photoFile);
      }
     this.props.createEvent(formData).then(
       res => {
         this.props.history.push(`/events/${res.payload.event.id}/`);
       }
     );
   }

// `${y}-${m}-${d}T00:00`
  render () {

    const {title, description, event_date, location, category_id, photoUrl, ticket_price} = this.state
    const preview = photoUrl ? <img height="100px" width="100px" src={photoUrl} /> : null;
    let date = new Date()
    let y = date.getFullYear()
    let m = date.getMonth()+1
    let d = date.getDate()
    return (
        <div className="parent-form">
          <form className="actual-event-parent-form" onSubmit={this.handleSubmit}>

          <div className="basic-details-contrainer">
            <div className="create-event-image-padding-right">
              <img className="basic-details-icon" src={window.images.basic_details_icon}/>
            </div>
            <div className="basic-details-inputs">
              <h1 className="creat-event-input-title">Basic Details</h1>
              <p className="create-event-descriptions">Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
              <input
               type="text"
               value={title}
               onChange={this.update('title')}
               className="event-title-input"
               placeholder="Event Title"
              />
              <textarea
               value={description}
               onChange={this.update('description')}
               className="create-event-desc-input"
               placeholder= "Event description to get attendees excited"
              />
              <input
              type='number'
              step='0.01'
              value={ticket_price}
              min="0.00"
              max="100000.00"
              onChange={this.update('ticket_price')}
              placeholder="Enter cost per ticket to attend your event. For example: 5.00"
              className="event-price-input"/>
            </div>
          </div>
          <div className="create-event-lines"></div>
          <div className="location-container">
            <div className="create-event-image-padding-right">
              <img className="location-icon" src={window.images.location_icon}/>
            </div>
            <div className="location-inputs">
              <h1 className="creat-event-input-title">Location</h1>
              <p className="create-event-descriptions">Help people in the area discover your event and let attendees know where to show up.</p>
              <input
                type="text"
                value={location}
                onChange={this.update('location')}
                className="create-event-location-input"
                placeholder="1234 Main Street, San Francisco, California 94111"
              />
            </div>
          </div>

          <div className="create-event-lines"></div>
          <div className="date-time-container">
            <div className="create-event-image-padding-right">
              <img className="date-time-icon" src={window.images.date_time_icon}/>
            </div>
            <div className="date-time-inputs">
              <h1 className="creat-event-input-title">Date and time</h1>
              <p className="create-event-descriptions">Tell event-goers when your event starts and ends so they can make plans to attend.</p>
              <input
               type="datetime-local"
               value={event_date}
               onChange={this.update('event_date')}
               className="create-event-datetime-input"
             />
            </div>
          </div>

          <div className="create-event-lines"></div>
        <div className="upload-pic-container">
          <div className="create-event-image-padding-right">
            <img className="picture-icon" src={window.images.picture_icon}/>
          </div>
          <div className="picture-inputs">
            <h1 className="creat-event-input-title">Main Event Image</h1>
            <p className="create-event-descriptions">This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio).</p>
            <input type="file" className="new-bench-button"
              className="chose-file-text"
              onChange={this.handleFile.bind(this)}/>
            <h1 className="create-event-descriptions">Image preview: </h1>
            {preview}
          </div>
        </div>
        <div className="create-event-lines"></div>
        <div className="create-submit-button">
          <input
            type="submit"
            value="Create Event"
            className="create-submit-button"
          />
        </div>

        </form>
      </div>
       )
     }
}


export default EventForm

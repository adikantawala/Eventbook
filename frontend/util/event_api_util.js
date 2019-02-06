export const fetchEvents = () => {
  return $.ajax({
    method: 'GET' ,
    url: "api/events"
  })
}

export const fetchEvent = id => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const createEvent = (formData) => {

  return $.ajax({
    method: "POST",
    url: `api/events`,
    data: formData,
    contentType: false,
    processData: false
  });
}

export const deleteEvent = (id, UserId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/events/${id}`
  });
}

// export const createEvent = event => (
//  console.log(event),
//  $.ajax({
//    method: 'POST',
//    url: 'api/events',
//    data: {event}
//  })
// );

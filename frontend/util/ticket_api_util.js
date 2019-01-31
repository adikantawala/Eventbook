// export const fetchTickets = () => {
//   return $.ajax({
//     method: 'GET' ,
//     url: "api/tickets"
//   })
// }

export const purchase = ticket => (
  $.ajax({
    method: 'POST',
    url: '/api/tickets',
    data: {ticket}
  })
);

//
// export const cancelTicket = () => (
//   $.ajax({
//     method: 'DELETE',
//     url: `/api/tickets/${id}`
//   })
// );

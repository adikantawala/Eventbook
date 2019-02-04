json.partial! "api/users/user", user: @user
json.ticketIds @user.tickets.pluck(:id)
json.createdEventIds @user.events.pluck(:id)

@user.tickets.each do |ticket|
  json.tickets do
    json.set! ticket.id do
      json.partial! "api/tickets/ticket", ticket: ticket
    end
  end
end

@user.events.each do |event|
  json.events do
    json.set! event.id do
      json.partial! "api/events/event", event: event
      if event.pic.attached?
        json.image_url url_for(event.pic)
      end
    end
  end
end

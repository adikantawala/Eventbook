json.event do
  json.partial! '/api/events/event', event: @event
  if @event.pic.attached?
    json.image_url url_for(@event.pic)
  end
end

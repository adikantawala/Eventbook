json.event do
  json.partial! '/api/events/event', event: @event
  # json.image_url url_for(@event.pic)
end

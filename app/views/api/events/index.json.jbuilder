@events.each do |event|
  json.set! event.id do
    json.partial! 'event', event: event
    json.extract! event, :id
    json.image_url url_for(event.pic)
  end
end

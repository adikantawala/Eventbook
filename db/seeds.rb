# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
User.create(email: "demo@user.com", first_name: "Demo", last_name: "User", password: "password" )

Event.delete_all

e1 = Event.create(event_date: Date.new(2019,2,22), ticket_price: 99.99, creator_id: 1, location: "The Getty Museum", title: "Opening Night Gala at Getty Museum", description: "Attend classy opening night gala at Getty Museum. This will be a black tie affair so come well dressed and ready to mingle with high society people.", category_id: 1)
e2 = Event.create(event_date: Date.new(2019,2,12), ticket_price: 5.50, creator_id: 1, location: "Mission Dolores Park", title: "Puppies in the Park", description: "Puppies in the park!! Please bring your dog and be prepared for a fun time of playing with puppies in the park. Attendance without a pet is allowed too; the more the merrier.", category_id: 1)
e3 = Event.create(event_date: Date.new(2019,2,11), ticket_price: 20.00, creator_id: 1, location: "Hip Yoga Studio", title: "Yoga with John Doe", description: "Beginners yoga class led by the famous John Doe to flex your muscles and see if yoga is the right fit for you. Yoga mats provided but please bring a bottle of water.", category_id: 1)
e4 = Event.create(event_date: Date.new(2019,2,7), ticket_price: 0.00, creator_id: 1, location: "Hollywood Sign", title: "Hollywood Sign Hike", description: "Have you ever wanted to hike to the top of the Hollywood sign? Well now is your chance! Finally strike that item off your bucket list and feel good doing it with a group of friends.", category_id: 1)
e5 = Event.create(event_date: Date.new(2019,2,3), ticket_price: 15.00, creator_id: 1, location: "San Francisco Financial District", title: "Business Networking", description: "Here is your chance to network with other like minded individuals looking for a change in the business place. Meet other CEO's and CFO's looking to invest and get an insight into how businesses run behind the scenes.", category_id: 1)
e6 = Event.create(event_date: Date.new(2019,2,5), ticket_price: 50.00, creator_id: 1, location: "Radio City Music Hall", title: "The Cool Musicians Live at Radio City Music Hall", description: "Come hear your favorite band, The Cool Musicians, playing for charity. Feel good about spending money and have fun doing it.", category_id: 1)

# Event.all.each do |e|
#   file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/generic_event.jpg")
#   e.pic.attach(io: file, filename: "generic_event_pic")
# end

file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/museum.jpg")
e1.pic.attach(io: file, filename: "generic_event_pic")
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/puppies.jpg")
e2.pic.attach(io: file, filename: "generic_event_pic")
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/yoga.jpg")
e3.pic.attach(io: file, filename: "generic_event_pic")
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/hiking.jpg")
e4.pic.attach(io: file, filename: "generic_event_pic")
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/networking-stock.jpg")
e5.pic.attach(io: file, filename: "generic_event_pic")
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/generic_event.jpg")
e6.pic.attach(io: file, filename: "generic_event_pic")

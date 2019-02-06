# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'bigdecimal'
User.delete_all
User.create(email: "demo@user.com", first_name: "Demo", last_name: "User", password: "password" )

Event.delete_all

e1 = Event.create(event_date: Date.new(2019,2,22), ticket_price: 99.99, creator_id: 1, location: "The Getty Museum", title: "Opening Night Gala at Getty Museum", description: "Attend classy opening night gala at Getty Museum. This will be a black tie affair so come well dressed and ready to mingle with high society people.", category_id: 1)
e2 = Event.create(event_date: Date.new(2019,2,12), ticket_price: 5.50, creator_id: 1, location: "Mission Dolores Park", title: "Puppies in the Park", description: "Puppies in the park!! Please bring your dog and be prepared for a fun time of playing with puppies in the park. Attendance without a pet is allowed too; the more the merrier.", category_id: 1)
e3 = Event.create(event_date: Date.new(2019,2,11), ticket_price: 10.00, creator_id: 1, location: "Hip Yoga Studio", title: "Yoga with John Doe", description: "Beginners yoga class led by the famous John Doe to flex your muscles and see if yoga is the right fit for you. Yoga mats provided but please bring a bottle of water.", category_id: 1)
e4 = Event.create(event_date: Date.new(2019,3,7), ticket_price: 0.00, creator_id: 1, location: "Hollywood Sign", title: "Hollywood Sign Hike", description: "Have you ever wanted to hike to the top of the Hollywood sign? Well now is your chance! Finally strike that item off your bucket list and feel good doing it with a group of friends.", category_id: 1)
e5 = Event.create(event_date: Date.new(2019,3,3), ticket_price: 15.00, creator_id: 1, location: "San Francisco Financial District", title: "Business Networking", description: "Here is your chance to network with other like minded individuals looking for a change in the business place. Meet other CEO's and CFO's looking to invest and get an insight into how businesses run behind the scenes.", category_id: 1)
e6 = Event.create(event_date: Date.new(2019,2,25), ticket_price: 50.00, creator_id: 1, location: "Radio City Music Hall", title: "The Cool Musicians Live at Radio City Music Hall", description: "Come hear your favorite band, The Cool Musicians, playing for charity. Feel good about spending money and have fun doing it.", category_id: 1)
e7 = Event.create(event_date: Date.new(2019,2,15), ticket_price: 25.00, creator_id: 1, location: "Pier 3 San Francisco", title: "Whiskies of the World", description: "Whiskies of the World brings together distillers from around the world to share their finest spirits and knowledge with whisky enthusiasts and the whisky curious. Discover the Art of Whisky in the company of connoisseurs and whisky celebrities.", category_id: 1)
e8 = Event.create(event_date: Date.new(2019,3,25), ticket_price: 0.00, creator_id: 1, location: "Fort Mason Center 2 Marina Boulevard", title: "Warehouse Sale Extravaganza", description: "Join the Warehouse Sale Extravaganza with over 2,000 dresses, tops, sweaters, and jackets. PRINT OUT THIS PAGE AND BRING WITH YOU FOR EARLY ENTRY", category_id: 1)
e9 = Event.create(event_date: Date.new(2019,3,7), ticket_price: 20.00, creator_id: 1, location: "Autodesk Gallery One Market Street San Francisco", title: "Out of This World: Exploring architecture in space", description: "Human settlement on Mars was once a farfetched idea. But with the use of robotic construction and deployment, the plan for habitable bases on other planets have become reality. Come see and explore various ideas for architecture in space.", category_id: 1)
e10 = Event.create(event_date: Date.new(2019,3,7), ticket_price: 30.00, creator_id: 1, location: "Garden for the Environment 1590 7th Avenue San Francisco", title: "Introduction to Sustainable Gardening", description: "The Introduction to Sustainable Gardening series is a three-part workshop series designed to help you transform your backyard into a thriving, sustainable garden. This course will teach you everything you need to know to plant flourishing perennial gardens that save water and attract pollinators and beneficial insects.", category_id: 1)
e11 = Event.create(event_date: Date.new(2019,3,19), ticket_price: 45.00, creator_id: 1, location: "UCSF Mission Bay Conference Center 1675 Owens Street San Francisco", title: "Hack Mental Health", description: "Hack Mental Health is dedicated towards developing technology that can improve mental health. The hackathon will offer participants the opportunity to develop and collaborate with industry leaders, healthcare professionals, researchers, and passionate, talented individuals from the Bay Area.", category_id: 1)
e12 = Event.create(event_date: Date.new(2019,3,14), ticket_price: 120.00, creator_id: 1, location: "2002 Montana Street Oakland", title: "Barbell Instructor Certification", description: "Candidates learn how to apply principle-based lifting methods to barbell training. You will focus on three timeless lifts, as well as the essential accessory movements. Learn how tension, bracing, and breathing can amplify your existing strength, and how to properly teach these principles to others.", category_id: 1)

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
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/drink.jpg")
e7.pic.attach(io: file, filename: "generic_event_pic")
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/shopping.jpg")
e8.pic.attach(io: file, filename: "generic_event_pic")
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/design.jpg")
e9.pic.attach(io: file, filename: "generic_event_pic")
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/garden.jpg")
e10.pic.attach(io: file, filename: "generic_event_pic")
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/MentalHealth.jpg")
e11.pic.attach(io: file, filename: "generic_event_pic")
file = open("https://s3-us-west-1.amazonaws.com/event--book-dev/gym.jpg")
e12.pic.attach(io: file, filename: "generic_event_pic")

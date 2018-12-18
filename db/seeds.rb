# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
User.create(email: "demo@user.com", first_name: "Demo", last_name: "User", password: "password" )

Event.delete_all

Event.create(creator_id: 1, location: "LA", title: "Cool Event 1", description: "description test 1", category_id: 1, event_date:"Sun, 16 Dec 2018 01:52:29 UTC +00:00")
Event.create(creator_id: 1, location: "LA", title: "Cool Event 1", description: "description test 1", category_id: 1, event_date:"Sun, 16 Dec 2018 01:52:29 UTC +00:00")
Event.create(creator_id: 1, location: "LA", title: "Cool Event 1", description: "description test 1", category_id: 1, event_date:"Sun, 16 Dec 2018 01:52:29 UTC +00:00")
Event.create(creator_id: 1, location: "LA", title: "Cool Event 1", description: "description test 1", category_id: 1, event_date:"Sun, 16 Dec 2018 01:52:29 UTC +00:00")
Event.create(creator_id: 1, location: "LA", title: "Cool Event 1", description: "description test 1", category_id: 1, event_date:"Sun, 16 Dec 2018 01:52:29 UTC +00:00")
Event.create(creator_id: 1, location: "LA", title: "Cool Event 1", description: "description test 1", category_id: 1, event_date:"Sun, 16 Dec 2018 01:52:29 UTC +00:00")
# Event.create(event_date:"Sun, 15 Dec 2018 02:52:29 UTC +00:00", creator_id: 1, location: "SF", title: "Cool Event 2", description: "description test 2", category_id: 1)
# Event.create(event_date:"Sun, 14 Dec 2018 03:52:29 UTC +00:00", creator_id: 1, location: "NY", title: "Cool Event 3", description: "description test 3", category_id: 1)
# Event.create(event_date:"Sun, 12 Dec 2018 03:52:29 UTC +00:00", creator_id: 1, location: "LA", title: "Cool Event 4", description: "description test 4", category_id: 1)
# Event.create(event_date:"Sun, 11 Dec 2018 03:52:29 UTC +00:00", creator_id: 1, location: "SF", title: "Cool Event 5", description: "description test 5", category_id: 1)
# Event.create(event_date:"Sun, 10 Dec 2018 03:52:29 UTC +00:00", creator_id: 1, location: "NY", title: "Cool Event 6", description: "description test 6", category_id: 1)

```js
{
  entities: {
    Events: {
      1: {
        id: 1,
        event_date: Mon Jun 02 12:02:39 -0700 2018,
        location: San Francisco,
        description: "Really fun party with cool people"
        price: "Free"
        category_id: 1
      }
    },
    users: {
      1: {
        id: 1,
        first_name: "demo",
        last_name: "user",
        email: "demo@user.com",
      }
    },
    Likes: {
      1: {
        id: 1,
        user_id: 1,
        event_id: 1,
      }
    },
    tickets: {
      1: {
        id: 1,
        purchaser_id: 1,
        event_id: 1,
        quantity: 2,
        price: "free"
      }
    },
    category: {
      1: {
        id: 1,
        name: "Food and drink",
        description: "Savor the flavor"
      }
    }
  },
  ui: {
    loading: true/false,
    modal: false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    signup: ["email can't be blank", "first name can't be blank", "last name can't be blank"],
    EventForm: ["Location is required", "title is required"],
  },
  session: { currentUserId: 1 }
}
```

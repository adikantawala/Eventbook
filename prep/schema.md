
## `users`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`first name`      | string    | not null
`last name`       | string    | not null
`email`           | string    | not null, indexed, unique
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique
`created_at`      | datetime  | not null
`updated_at`      | datetime  | not null

* index on `session_token`, unique: true
* index on `password_digest`, unique: true
* index on `email`, unique: true

## Events

column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`event_date `     | datetime  | not null
`creator_id `     | integer   | not null, indexed, foreign key
`location `       | string    | not null
`description `    | text      | not null
`category_id `    | integer   | not null, indexed, foreign key
`created_at`      | datetime  | not null
`updated_at`      | datetime  | not null
*	`creator_id` references users
*	index on `creator_id`
*	index created on category_id since its a foreign key


## Likes (Bookmarks)

column name     | data type | details
----------------|-----------|-----------------------
`id `           | integer   | not null, primary key
`user_id `      | integer   | not null, indexed, foreign key
`event_id `     | integer   | not null, indexed, foreign key
`created_at`    | datetime  | not null
`updated_at`    | datetime  | not null

*	`user_id` references users
*	`event_id` references event
*	index on [:event_id, :user_id], unique: true


## Tickets

column name     | data type | details
----------------|-----------|-----------------------
`id `           | integer   | not null, primary key
`purchaser_id ` | integer   | not null, indexed, foreign key
`event_id `     | integer   | not null, indexed, foreign key
`quantity `     | integer   | not null
`price `        | string    | not null
`created_at`    | datetime  | not null
`updated_at`    | datetime  | not null
*	`purchaser_id` is a user
*	`purchaser_id` is indexed
*	`event_id` is indexed  
*	`price` was made as string because it could be “free”

## Category

column name     | data type | details
----------------|-----------|-----------------------
`id `           | integer   | not null, primary key
`name `         | string    | not null
`description `  | string    | not null
`created_at`    | datetime  | not null
`updated_at`    | datetime  | not null

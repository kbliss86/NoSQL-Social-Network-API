
// USER DEMO

// getUsers
// get
// http://Localhost:3001/api/users

// getUserById
// get w/ id
// http://Localhost:3001/api/users/6524cc88d86accecf480438e

// createUser
// post
// http://Localhost:3001/api/users
{
  "username": "ebliss",
  "email": "erica.bliss@email.com"
}

// updateUser
// put w/ id
// http://Localhost:3001/api/users/6524cc88d86accecf480438e
{
  "username": "ebliss",
  "email": "erica.bliss86@email.com"
}

// getUsers - to show that user was updated
// get
// http://Localhost:3001/api/users

// deleteUser
// delete w/ id
// http://Localhost:3001/api/users/6524cc88d86accecf480438e

// getUsers - to show that user was deleted
// get
// http://Localhost:3001/api/users

//addFriend
// post w/ id w/ friends/:friendId
// http://Localhost:3001/api/users/6524cc88d86accecf480438e/friends/6524d08bd86accecf4804395

// deleteFriend
// delete w/ id w/ friends/:friendId
// http://Localhost:3001/api/users/6524cc88d86accecf480438e/friends/6524d08bd86accecf4804395


// THOUGHT DEMO

// getAllThoughts
// get
// http://Localhost:3001/api/thoughts

// getThoughtById
// get w/ id
// http://Localhost:3001/api/thoughts/6524ebdc9951a45fa0eddadf

// createThought
// post
// http://Localhost:3001/api/thoughts
{
  "thoughtText": "This is a demo thought from Nora",
  "username": "norabliss",
  "userId": "6524d08bd86accecf4804395"
}

//get all thoughts - to show that thought was created
// getAllThoughts
// get
// http://Localhost:3001/api/thoughts

// updateThought
// put w/ id
// http://Localhost:3001/api/thoughts/6524ebdc9951a45fa0eddadf
{
  "thoughtText": "This is an updated test thought from Nora 2",
  "username": "norabliss",
  "userId": "6524d08bd86accecf4804395"
}

//get all thoughts - to show that thought was updated
// getAllThoughts
// get
// http://Localhost:3001/api/thoughts

// deleteThought
// delete w/ id
// http://Localhost:3001/api/thoughts/6524ebdc9951a45fa0eddadf

//get all thoughts - to show that thought was deleted
// getAllThoughts
// get
// http://Localhost:3001/api/thoughts

// REACTION DEMO

// addReaction
// post w/ id w/ reactions
// http://Localhost:3001/api/thoughts/6520ff728ae49ab4803f4f54/reactions
{
    "reactionBody": "👍",
    "username": "sampleUsername"
}

// getThoughtById - to show that reaction was added
// get w/ id
// http://Localhost:3001/api/thoughts/6520ff728ae49ab4803f4f54

// deleteReaction
// delete w/ id w/ reactions/:reactionId
// http://Localhost:3001/api/thoughts/6520ff918ae49ab4803f4f57/reactions/6524d5ded86accecf48043aa

// getThoughtById - to show that reaction was deleted
// get w/ id
// http://Localhost:3001/api/thoughts/6520ff918ae49ab4803f4f57


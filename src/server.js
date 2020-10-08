const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs/user');
const resolvers = require('./resolvers/user');
const models = require('./models');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
})

server
  .listen()
  .then(({ url }) => console.log('Server is running on localhost:4000'))
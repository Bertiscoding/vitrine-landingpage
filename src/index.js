const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PubSub } = require('apollo-server')
const { PrismaClient } = require("@prisma/client");
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const resolvers = {
  Query,
  Mutation,
}

const prisma = new PrismaClient()
const pubsub = new PubSub()

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: ({ req }) => {
    return {
     ...req,
     prisma,
     pubsub
    }
  }
})

server
  .listen()
  .then(({ url }) => console.log(url))

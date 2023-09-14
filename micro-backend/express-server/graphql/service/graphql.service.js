const { ApolloServer } = require('@apollo/server');
const typeDefs = require('../schema/hello.schema');
const resolvers = require('../resolver/hello.resolver');

const createApolloServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
  });
};

module.exports = createApolloServer;

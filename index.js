const { ApolloServer } = require('apollo-server');
const userResolvers = require('./resolvers/userResolvers');
const userSchema = require('./schemas/user.graphql');

const typeDefs =[userSchema];
const resolvers = [userResolvers];

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(url));
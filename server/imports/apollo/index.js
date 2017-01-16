import {createApolloServer} from 'meteor/apollo'
import {makeExecutableSchema} from 'graphql-tools'
import {loadSchema, getSchema} from 'graphql-loader'
import {initAccounts} from 'meteor/nicolaslopezj:apollo-accounts'
import cors from 'cors'
import typeDefs from './schema'
import resolvers from './resolvers'
import { PubSub, SubscriptionManager } from 'graphql-subscriptions'
import seed from './seed'
import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
seed()
// Load all accounts related resolvers and type definitions into graphql-loader
initAccounts({})

// Load all your resolvers and type definitions into graphql-loader
loadSchema({typeDefs, resolvers})

// Gets all the resolvers and type definitions loaded in graphql-loader
const schema = makeExecutableSchema(getSchema())
const pubsub = new PubSub()
const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub
})
const WS_PORT = process.env.WS_PORT || 8080

createApolloServer({schema}, {
  configServer (graphQLServer) {
    graphQLServer.use(cors())
  }
})
export { subscriptionManager, pubsub }
const httpServer = createServer((request, response) => {
  response.writeHead(404)
  response.end()
})
httpServer.listen(WS_PORT, () => console.log(
  `Websocket Server is now running on http://localhost:${WS_PORT}`
))
const server = new SubscriptionServer({ subscriptionManager }, httpServer)


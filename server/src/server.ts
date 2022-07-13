import 'reflect-metadata'
import './config/aliases'

import './config/dotenv'

import { ApolloServer } from 'apollo-server'
import schema from './schemas'

import './database'
import './database/models'

const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
        req,
        token: req?.headers?.authorization,
    }),
})

const { SERVER_PORT } = process.env
server.listen({ port: SERVER_PORT }, () =>
    console.log(`server is running on port ${SERVER_PORT}`)
)

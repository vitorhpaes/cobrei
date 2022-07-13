import 'reflect-metadata'

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

server.listen({ port: process.env.SERVER_PORT }, () =>
    console.log(`server is running on port ${process.env.SERVER_PORT}`)
)

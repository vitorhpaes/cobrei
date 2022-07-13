import path from 'path'
import { buildSchemaSync } from 'type-graphql'
import { UserResolver, SessionResolver } from '../resolvers'

import Auth from './Auth'
import User from './User'

import AuthMiddleware from '../middlewares/Auth'

const schema = buildSchemaSync({
    resolvers: [User, UserResolver, Auth, SessionResolver],
    authChecker: AuthMiddleware,
    emitSchemaFile: path.resolve(__dirname, '../../schema.gql'),
})

export default schema

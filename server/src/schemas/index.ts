import path from 'path'
import { buildSchemaSync } from 'type-graphql'
import { UserResolver, SessionResolver } from '../resolvers'

import Auth from './Auth'
import User from './User'

const schema = buildSchemaSync({
        resolvers: [User, UserResolver, Auth, SessionResolver],
        emitSchemaFile: path.resolve(__dirname, '../../schema.gql'),
    })

export default schema

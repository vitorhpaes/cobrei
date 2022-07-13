import { Arg, Mutation, Resolver } from 'type-graphql'
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import MongoUser from '../database/models/User'
import Auth from '../schemas/Auth'
import AuthConfig from '../config/auth'

@Resolver(Auth)
class SessionResolver {
    @Mutation((returns) => Auth)
    async signIn(
        @Arg('username') username: string,
        @Arg('password') password: string
    ) {
        const user = await MongoUser.findOne({
            username,
        })

        if (!user) {
            throw new Error('Incorrect email/password combination.')
        }

        const passwordMatched = await bcrypt.compare(password, user.password)

        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination.')
        }

        const { secret, expiresIn } = AuthConfig.jwt

        const token = sign({}, secret, {
            subject: `"${user.id}"`,
            expiresIn,
        })

        return {
            token,
            user,
        }
    }
}

export default SessionResolver

import { Field, ObjectType } from 'type-graphql'
import User from './User'

interface AuthProps {
    token: string
    user: User
}

@ObjectType()
class Auth implements AuthProps {
    @Field({ nullable: false })
    token: string

    @Field((type) => User, { nullable: false })
    user: User
}

export default Auth

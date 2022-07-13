import { Field, ID, ObjectType } from 'type-graphql'

import { UserProps } from '@app/types/User'
@ObjectType()
class User implements UserProps {
    @Field((_type) => ID, { nullable: false })
    id: any

    @Field()
    name: string

    @Field()
    username: string

    @Field()
    password: string

    @Field({ nullable: true })
    lastLogin: Date

    @Field({ nullable: true })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date
}

export default User

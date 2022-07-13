import { Field, ID, ObjectType } from 'type-graphql'

import { UserProps } from '@app/types/User'
import Node from './Node'

@ObjectType({ implements: Node })
class User implements UserProps, Node {
    @Field((_type) => ID, { nullable: false })
    id: any

    @Field()
    name: string

    @Field()
    username: string

    @Field()
    password: string

    @Field()
    lastLogin: Date

    @Field({ nullable: true })
    createdAt: Date

    @Field({ nullable: true })
    updatedAt: Date
}

export default User

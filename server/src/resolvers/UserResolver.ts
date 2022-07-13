import { hash } from 'bcryptjs'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import User from '../schemas/User'
import UserModel from '../database/models/User'

/*
    query: buscar
    mutation: adicionar / alterar / excluir 
*/

@Resolver()
class UserResolver {
    @Query((returns) => [User], { name: 'getAllUsers' })
    async getAllUsers() {
        return await UserModel.find()
    }

    @Query((returns) => User, { name: 'getByUsername' })
    async getByUsername(@Arg('username') username: string) {
        console.log(username)
        const user = await UserModel.findOne({ username })
        console.log(user)
        return user
    }

    @Mutation((returns) => User, { name: 'createUser' })
    async create(
        @Arg('name') name: string,
        @Arg('username') username: string,
        @Arg('password') password: string
    ) {
        const hashedPassword = await hash(password, 8)

        const user = await UserModel.create({
            name,
            username,
            password: hashedPassword,
        })

        return user
    }
}

export default UserResolver

import { Query, Resolver } from 'type-graphql'
import User from '../schemas/User'

/*
    query: buscar
    mutation: adicionar / alterar / excluir 
*/

@Resolver()
class UserResolver {
    private readonly data: User[] = []

    @Query(() => [User])
    async users() {
        return this.data
    }
}

export default UserResolver

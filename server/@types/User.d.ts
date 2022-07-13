export interface UserPropsDocument {
    name: string
    username: string
    password: string
    lastLogin: Date
    createdAt?: Date
    updatedAt?: Date
}

export interface UserProps extends UserPropsDocument {
    id?: any
}

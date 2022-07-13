import mongoose, { Schema } from 'mongoose'
import normalize from 'normalize-mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
import { UserProps, UserPropsDocument } from '@app/types/User'

/*
    tables linking example - at schema
    https://github.com/LuisFilipePedroso/typegraphql-twitter-api/blob/master/src/database/schemas/Tweet.ts
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
*/

const userSchema = new Schema<UserPropsDocument>({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    lastLogin: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        required: false,
        default: Date.now,
    },
})

const User = mongoose.model<UserProps>('User', userSchema)

userSchema.plugin(normalize)
userSchema.plugin(mongoosePaginate)

export default User

import mongoose from 'mongoose'

const { DATABASE_NAME } = process.env

mongoose.connect(`mongodb://localhost:27017/${DATABASE_NAME}`)

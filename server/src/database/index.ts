import mongoose from 'mongoose'

const databaseName = process.env.DATABASE_NAME

mongoose.connect(`mongodb://localhost:27017/${databaseName}`)

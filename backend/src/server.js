import express from 'express'
import dotenv from 'dotenv'
import connectDB from './models/db.js'

dotenv.config()
connectDB()

const app = express()

const PORT = process.env.PORT || 6000

app.listen(PORT , () => {
    console.log("server started in " ,PORT)
})
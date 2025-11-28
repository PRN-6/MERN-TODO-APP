import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import todoRoute from './routes/todoRoute.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server is running!")
})

app.use("/api/todos", todoRoute)
const PORT = process.env.PORT || 6000

app.listen(PORT , () => {
    console.log("server started in " ,PORT)
})
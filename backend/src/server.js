import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import todoRoute from './routes/todoRoute.js'
import cors from 'cors'

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 6000

app.use(express.json())

app.use(
    cors({
    origin:'http://localhost:5173'
}))

app.get("/", (req, res) => {
    res.send("Server is running!")
})

app.use("/api/todos", todoRoute)

app.listen(PORT , () => {
    console.log("server started in " ,PORT)
})
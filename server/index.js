import express from "express";
import * as dotenv from 'dotenv'
import cors from "cors"

dotenv.config();

import connectDB from "./mongodb/connect.js";
import userRouter from './routes/user.route.js'
import propertyRouter from './routes/property.route.js'

const app = express();
app.use(cors())
app.use(express.json({limit: '50mb'}))

app.get('/', (req, res) => {
    res.send({message: "Hello world!"})
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/properties', propertyRouter)

const port = process.env.PORT || 7070

const startServer = async () => {
    try {
        // connectDB
        connectDB(process.env.MONGO_URI)
        app.listen(port, console.log("Server listening on port http://localhost:7070"))
    } catch (error) {
        console.log(error)
    }
}

startServer()
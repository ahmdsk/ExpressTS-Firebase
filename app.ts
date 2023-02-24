import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import router from "./src/router"
import dotenv from "dotenv"

const app = express()
const port: number = 8000
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        'status': true,
        'message': 'Todo Firebase API + ExpressJS'
    })
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
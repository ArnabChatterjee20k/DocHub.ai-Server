import express from "express"
import cors from "cors"
import botRouter from "./Routes/Bot.js"

const app = express()
const port = 5000
app.use(cors())
app.use(express.json())

app.use("/bot",botRouter)

app.listen(port, () => {
    console.log(`Noty listening on http://localhost:${port}`)
})
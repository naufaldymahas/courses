const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const port = require("./3.helpers/port")
const { authRouters } = require("./2.routers")

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => res.send("Welcome to API" + port))

app.use("/auth", authRouters)

app.listen(port, () => console.log("Listen to PORT " + port))
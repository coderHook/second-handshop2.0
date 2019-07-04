const express = require('express')
const cors = require('cors')
const db = require('./db')
const bodyParser = require('body-parser')
const path = require("path")


const Advertisement = require('./advertisement/model')
const advertisementRoutes = require('./advertisement/routes')

const app = express()
const jsonParser = bodyParser.json()

app.use(cors())
app.use(jsonParser)
app.use(advertisementRoutes)
//To server files as static in heroku
app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
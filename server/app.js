const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const monsters = require('./routes/monsters')
const habitats = require('./routes/habitats')
const lives = require('./routes/lives')
const userprofile = require('./routes/userprofile')
const comment = require('./routes/comment')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/monsters', monsters)
app.use('/habitats', habitats)
app.use('/lives', lives)
app.use('/userprofile', userprofile)
app.use('/comment', comment)

app.use((err, req, res, next) => {
    res.json(err)
})

module.exports = app

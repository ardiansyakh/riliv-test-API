const dotenv = require('dotenv')
if(process.env.NODE_ENV !== 'prod'){
    dotenv.config()
}
const express = require('express')
const cors = require('cors')
const route = require('./routes')
const err = require('./helper/error')
const http = require('http')
const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
const server = http.createServer(app)
app.use(route)
app.use(err)

server.listen(port, () => {
    console.log('server running on: ', port)
})

module.exports = app
import dotenv from 'dotenv'
if(process.env.NODE_ENV !== 'prod'){
    dotenv.config()
}
import express from 'express'
import cors from 'cors'
import route from './routes'
import err from './helper/error'
import http from 'http'
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

export default app
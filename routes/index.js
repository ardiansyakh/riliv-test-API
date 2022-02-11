import express from "express"
import auth from './auth'
import admin from './admin'
import order from './order'
const route = express.Router()

route.use('/admin', admin)
route.use('/auth', auth)
route.use('/order', order)

export default route
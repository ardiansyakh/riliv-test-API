import express from "express"
import auth from './auth'
import admin from './admin'
import order from './order'
import item from './item'
const route = express.Router()

route.use('/admin', admin)
route.use('/item', item)
route.use('/auth', auth)
route.use('/order', order)

export default route
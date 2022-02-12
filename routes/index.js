const express = require("express")
const auth = require('./auth')
const admin = require('./admin')
const order = require('./order')
const item = require('./item')
const { authentication, isAdmin } = require("../middleware/auth")
const route = express.Router()

route.use('/admin', authentication, isAdmin, admin)
route.use('/item', item)
route.use('/auth', auth)
route.use('/order', authentication, order)

module.exports = route
const express = require("express")
const { OrderController } = require('../controllers')
const route = express.Router()

route.get('/cart', OrderController.getCart)
route.post('/cart', OrderController.addToCart)
route.delete('/cart', OrderController.removeItem)
route.post('/checkout', OrderController.checkout)

module.exports = route
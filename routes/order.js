const express = require("express")
const { OrderController } = require('../controllers')
const route = express.Router()

route.get('/carts', OrderController.getCart)
route.post('/carts', OrderController.addToCart)
route.patch('/carts/:id/qty', OrderController.updateQty)
route.delete('/carts/:id', OrderController.removeItem)
route.post('/checkout', OrderController.checkout)
route.post('/quickCheckout', OrderController.quickCheckout)
route.get('/purchasing', OrderController.getPurchasing)
route.get('/purchasing/:transaction_code', OrderController.getPurchasingDetail)

module.exports = route
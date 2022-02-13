const express = require("express")
const { AdminController, OrderController } = require("../controllers")
const route = express.Router()

route.post('/item', AdminController.addItem)
route.put('/item/:id', AdminController.updateItem)
route.delete('/item/:id', AdminController.deleteItem)
route.get('/purchasing', AdminController.getPurchasing)
route.get('/purchasing/:transaction_code', OrderController.getPurchasingDetail)

module.exports = route
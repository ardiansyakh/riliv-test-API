const express = require("express")
const { AdminController } = require("../controllers")
const route = express.Router()

route.post('/', AdminController.addItem)
route.put('/:id', AdminController.updateItem)
route.delete('/:id', AdminController.deleteItem)

module.exports = route
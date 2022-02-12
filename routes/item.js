const express = require("express")
const { ItemController } = require("../controllers")
const route = express.Router()

route.get('/', ItemController.getItems)
route.get('/:id', ItemController.getItemDetail)

module.exports = route
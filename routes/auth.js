const express = require("express")
const { AuthController } = require('../controllers')
const route = express.Router()

route.post('/login', AuthController.login)
route.post('/register', AuthController.register)

module.exports = route
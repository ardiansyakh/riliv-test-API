import express from "express"
import { AuthController } from '../controllers'
const route = express.Router()

route.post('/login', AuthController.login)
route.post('/register', AuthController.register)
export default route
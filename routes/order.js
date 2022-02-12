import express from "express"
import { OrderController } from '../controllers'
const route = express.Router()
route.get('/cart', OrderController.getCart)
route.post('/cart', OrderController.addToCart)
route.delete('/cart', OrderController.removeItem)
route.post('/checkout', OrderController.checkout)

export default route
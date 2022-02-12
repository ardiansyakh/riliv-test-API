import express from "express"
import { AdminController } from "../controllers"
const route = express.Router()

route.post('/', AdminController.addItem)
route.put('/:id', AdminController.updateItem)
route.delete('/:id', AdminController.deleteItem)

export default route
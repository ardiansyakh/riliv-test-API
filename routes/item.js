import express from "express";
import { ItemController } from "../controllers";
const route = express.Router()

route.get('/', ItemController.getItems)
route.get('/:id', ItemController.getItemDetail)

export default route
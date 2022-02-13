const ItemService = require("../services/item")
const OrderService = require("../services/order")

class AdminController {
    static addItem = async (req, res, next) => {
        try {
            const { name, stock, price } = req.body
            const newItem = await ItemService.addItem({name, stock, price}, next)
            if(newItem)
                res.status(201).json({data: newItem})
        } catch (error) {
            next(error)
        }
    }
    static updateItem = async (req, res, next) => {
        try {
            const { name, stock, price } = req.body
            const { id } = req.params
            const update = await ItemService.updateItem({name, stock, price, id}, next)
            if(update)
                res.status(200).json({data: update})
        } catch (error) {
            next(error)
        }

    }
    static deleteItem = async (req, res, next) => {
        try {
            const { id } = req.params
            const deleted = await ItemService.deleteItem({ id }, next )
            if(deleted) 
                res.status(200).json({msg: 'successfully deleted'})
        } catch (error) {
            next(error)
        }
    }
    static getPurchasing = async (req, res, next) => {
        try {
            const { payment_status, page = 1, limit = 10 } = req.query
            const orders = await OrderService.getAll({payment_status, page, limit}, next)
            if(orders)
                res.status(200).json({page, limit, data: orders})
        } catch (error) {
            next(error)
        }
    }
}
module.exports = AdminController
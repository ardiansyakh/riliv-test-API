const OrderService = require("../services/order")

class OrderController {
    static getCart = async (req, res, next) => {
        try {
            const userId = req.userId
            const carts = await OrderService.getCart({userId}, next)
            if(carts)
                res.status(200).json({data: carts})
        } catch (error) {
            next(error)
        }
    }
    static addToCart = async (req, res, next) => {
        try {
            const userId = req.userId
            const { itemId, qty } = req.body
            const newCart = await OrderService.addToCart( { userId, itemId, qty }, next)
            if(newCart)
                res.status(201).json({data: newCart})
        } catch (error) {
            next(error)
        }
    }
    static updateQty = async (req, res, next) => {
        try {
            const { id } = req.params
            const userId = req.userId
            const { qty } = req.body
            let newCart = await OrderService.updateQty({ userId, id, qty }, next)
            if(newCart)
                res.status(201).json({data: newCart})
        } catch (error) {
            next(error)
        }
    }
    static removeItem = async (req, res, next) => {
        try {
            const userId = req.userId
            const { id } = req.params
            const newCart = await OrderService.removeItem({ userId, id }, next)
            if(newCart)
                res.status(201).json({data: 'successfully deleted item'})
        } catch (error) {
            next(error)
        }
    }
    static checkout = async (req, res, next) => {
        try {
            const userId = req.userId
            const checkout = await OrderService.checkout({userId}, next)
            if(checkout)
                res.status(201).json({checkout})
        } catch (error) {
            next(error)
        }
    }
    static quickCheckout = async (req, res, next) => {
        try {
            const { item } = req.body
            const userId = req.userId
            const checkout = await OrderService.quickCheckout({item, userId, qty: 1}, next)
            if(checkout)
                res.status(201).json({checkout})
        } catch (error) {
            next(error)
        }
    }
    static getPurchasing = async (req, res, next) => {
        try {
            const { payment_status, page = 1, limit = 10 } = req.query
            const userId = req.userId
            const orders = await OrderService.getAll({payment_status, page, limit, userId}, next)
            if(orders)
                res.status(200).json({page, limit, data: orders})
        } catch (error) {
            next(error)
        }
    }
    static getPurchasingDetail = async (req, res, next) => {
        try {
            const { transaction_code } = req.params
            const order = await OrderService.getOrderDetail({transaction_code}, next)
            if(order)
                res.status(200).json({data: order})
        } catch (error) {
            next(error)
        }
    }
    static updateStatus = async (req, res, next) => {
        try {
            const { status, transaction_code  } = req.body
            const order = await OrderService.updateStatus({transaction_code, status}, next)
            if(order)
                res.status(200).json({data: order})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = OrderController
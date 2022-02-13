const {
    User,
    Item,
    Cart,
    Purchasing,
    PurchasingDetail
} = require('../models')
const { v4: uuidv4 } = require('uuid')
class OrderService {
    static getAll = async (params, next) => {
        try {
            const { payment_status, page, limit, userId } = params
            let offset = (+page - 1) * limit
            let where = {}
            if(payment_status)
                where = { 
                    ...where,
                    payment_status 
                }
            if(userId)
                where = { 
                    ...where,
                    userId 
                }
            const orders = await Purchasing.findAndCountAll({ 
                where,
                limit,
                offset,
                include: [
                    {
                        model: User,
                        attributes: ['id', 'email']
                    },
                    {
                        model: PurchasingDetail,
                        include: [
                           {
                               model: Item,
                           }
                        ]
                    }
                ]
            })
            return orders
        } catch (error) {
            next(error)
        }
    }
    static getOrderDetail = async (param, next) => {
        try {
            const { transaction_code } = param

            const order = await Purchasing.findOne({ 
                where : { transaction_code },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'email']
                    },
                    {
                        model: PurchasingDetail,
                        include: [
                           {
                               model: Item,
                           }
                        ]
                    }
                ]
            })
            return order
        } catch (error) {
            next(error)
        }
    }

    static getCart = async (param, next) => {
        try {
            const { userId } = param
            const carts = await Cart.findAll({ 
                where: { userId },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'email']
                    },
                    {
                        model: Item
                    }
                ]
            })
            let total = 0
            if(carts.length >0)
                carts.forEach(cart=> {
                    console.log(cart);
                    let subtotal = cart.qty * cart.Item.price
                    cart.subTotal = subtotal
                    total += subtotal
                })
            return { total, carts }
        } catch (error) {
            next(error)
        }
    }
    static addToCart = async (params, next) => {
        try {
            const { itemId, userId, qty } = params
            const item = await Item.findByPk(itemId)
            if(item) {
                if(item.stock >= qty) {
                    let checkCart = await Cart.findOne({ where: {itemId}})
                    if(checkCart) {
                        let newQty = +qty + checkCart.qty
                        checkCart.qty = newQty
                        await checkCart.save()
                    }
                    else {
                        await Cart.create({itemId, userId, qty})
                    }
                    return this.getCart({userId}, next)
                }
                else {
                    throw({code: 400, message: `stock availabel: ${item.stock}`})
                }
            }
            else {
                throw({code: 404, message: 'itemId not found'})
            }
        } catch (error) {
            next(error)
        }
    }
    static updateQty = async (params, next) => {
        try {
            const { userId, id, qty } = params
            if(qty == 0) {
                await this.removeItem({ userId, id }, next)
            }
            else {
                let cart = await Cart.findOne({where: {
                    id,
                    userId
                }})
                if(cart){
                    cart.qty = qty
                    await cart.save()
                }
                else {
                    throw({code: 404, message: 'Cart item not found'})
                }
            }
            return this.getCart({userId}, next)
        } catch (error) {
            next(error)
        }
    }
    static removeItem = async (params, next) => {
        try {
            let { userId, id } = params
            let cart = await Cart.findOne({where: {
                id,
                userId
            }})
            if(cart){
                await cart.destroy()
                return true
            }
            else {
                throw({code: 404, message: 'Cart item not found'})
            }
        } catch (error) {
            next(error)
        }
    }
    static checkout = async (param, next) => {
        try {
            let { userId } = param
            let carts = await this.getCart({ userId })
            let transaction_code = uuidv4()
            let purchasing = await Purchasing.create({
                transaction_code, 
                userId,
                payment_status: 'WAITING_PAYMENT',
                total: carts.total
            })
            let purchasing_detail = []
            let deleted_cart = []
            await carts.carts.map(cart=> {
                purchasing_detail = [
                    ...purchasing_detail, 
                    {
                        purchasingId: purchasing.id,
                        itemId: cart.itemId,
                        qty: cart.qty,
                        price: cart.Item.price
                    }
                ]
                deleted_cart = [
                    ...deleted_cart,
                    cart.id
                ]
            })
            await PurchasingDetail.bulkCreate(purchasing_detail)
            await Cart.destroy({
                where: {
                    id: deleted_cart
                }
            })
            return 'Checkout Success'
        } catch (error) {
            next(error)
        }
    }
    static quickCheckout = async (params, next) => {
        try {
            let {item, userId, qty} = params
            const checkItem = Item.findByPk(item.id)
            if(checkItem.stock > 0) {
                let transaction_code = uuidv4()
                let purchasing = await Purchasing.create({
                    transaction_code, 
                    userId,
                    payment_status: 'WAITING_PAYMENT',
                    total: item.price
                })
                await PurchasingDetail.create({
                    purchasingId: purchasing.id,
                    itemId: item.id,
                    qty,
                    price: item.price
                })
                return 'Checkout Success'
            }
            else {
                throw({code: 400, message: `product out of stock`})
            }
        } catch (error) {
            next(error)
        }
    }
    static updateStatus = async (params, next) => {
        try {
            const { transaction_code, status } = params
            if(status.toLowerCase() == 'success') {
                let payment_status = 'COMPLETED' 
                let order  = await Purchasing.findOne({where: {
                    transaction_code
                }})
                if(order){
                    if(order.payment_status !== 'WAITING_PAYMENT')
                        throw({code: 400, message: 'order has already paid or cancel'})
                    order.payment_status = payment_status
                    await order.save()
                }
                else {
                    throw({code: 404, message: 'payment_code not found'})
                }
                return 'payment success'
            }
            else {
                throw({code: 400, message: 'payment failed'})
            }

        } catch (error) {
            next(error)
        }
    }
}

module.exports = OrderService
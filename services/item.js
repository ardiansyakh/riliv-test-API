const { Item } = require('../models')
class ItemService {
    static getItems = async (params, next) => {
        try {
            const { page, limit} = params
            let offset = ( +page - 1 ) * +limit
            console.log(limit);
            const items = await Item.findAndCountAll({offset, limit})
            return items
        } catch (error) {
            next(error)
        }
    }
    static getItemDetail = async (params, next) => {
        try {
            const { id } = params
            const item = await Item.findByPk(id)
            if(item) {
                return item
            }
            else {
                throw({code: 404, message: 'Item Not Found'})
            }
        } catch (error) {
            next(error)
        }
    }
    static addItem = async (params, next) => {
        try {
            const { name, stock, price } = params
            const newItem = await Item.create({name, stock,price})
            return newItem
        } catch (error) {
            next(error)
        }
    }
    static updateItem = async (params, next) => {
        try {
            const {id, name, stock, price } = params
            const existingItem = await Item.findByPk(id)
            if(existingItem) {
                existingItem.name = name
                existingItem.stock = stock
                existingItem.price = price
                await existingItem.save()
                return existingItem
            }
            else {
                throw({code: 404, message: 'Item Not Found'})
            }
        } catch (error) {
            next(error)
        }
    }
    static deleteItem = async (params, next) => {
        try {
            const { id } = params
            const existingItem = await Item.findByPk(id)
            if(existingItem) {
                await existingItem.destroy()
                return true
            }
            else {
                throw({code: 404, message: 'Item Not Found'})
            }
        } catch (error) {
            next(error)
        }
    }
}
module.exports = ItemService
const ItemService = require('../services/item')
class ItemController {
    static getItems = async (req, res, next) => {
        try {
            const { page = 1, limit = 10 } = req.query
            const items = await ItemService.getItems({page, limit}, next)
            if(items)
                res.status(200).json({ page,limit, data: items })
        }
        catch (error) {
            next(error)
        }
    }
    static getItemDetail = async (req, res, next) => {
        try {
            const { id } = req.params
            const item = await ItemService.getItemDetail({id}, next)
            if(item)
                res.status(200).json({data: item})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ItemController
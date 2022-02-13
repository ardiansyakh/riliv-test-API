const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { User } = require('../models')
class AuthService {
    static register = async (params, next) => {
        try {
            const { email, password, role } = params
            let checkExistingUSer = await User.findOne({
                where: {
                    email
                }
            })
            if(checkExistingUSer) {
                throw({code: 400, message: 'User Already Exist' })
            }
            let newUser = await User.create({ email, password, role })
            return newUser
            
        } catch (error) {
            next(error)
        }
    }
    static login = async (params, next) => {
        try {
            const { email, password } = params
            let checkExistingUSer = await User.findOne({
                where: {
                    email
                }
            })
            if(checkExistingUSer) {
                let compare = bcrypt.compareSync(password, checkExistingUSer.password)
                if(compare){
                    let token = await jwt.sign({ userId: checkExistingUSer.id, type: checkExistingUSer.role }, process.env.JWT)
                    console.log(token);
                    checkExistingUSer.password = null
                    checkExistingUSer.dataValues.aaccess_token = token
                    return checkExistingUSer
                }
            }
            throw({code: 400, message: 'email/password false'})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthService
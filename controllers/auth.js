const AuthService = require("../services/auth")

class AuthController {
    static register = async (req, res, next) => {
        try {
            let { email, password, role } = req.body
            if(!email || !password, !role) next({name: "ParameterMissingError"})
            let newUser = await AuthService.register({ email, password, role }, next)
            if(newUser)
                res.status(201).json({data: newUser})
        } catch (error) {
            next(error)
        }
    }
    static login = async (req, res, next) => {
        try {
            let { email, password } = req.body
            if(!email || !password) next({name: "ParameterMissingError"})
            let user = await AuthService.login({ email, password }, next)
            if(user)
                res.status(200).json({data: user})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthController
const jwt = require('jsonwebtoken')
const authentication = async (req, res, next) => {
    try {
        let errorResponse = { code: '401' , message: 'Invalid token' }
        
        if(!req.headers.authorization)
            throw errorResponse

        let [ type, token ] = req.headers.authorization.split(' ');

        if(!type || !token)
            throw errorResponse
        if( type.toLowerCase() != 'bearer' )
            throw errorResponse
        
        let decoded = await jwt.verify(token, process.env.JWT);
        req.userId = await decoded.userId
        req.user_type =  await decoded.type
        if(!(req.userId)){
            throw errorResponse
        }
        next();
    } catch (error) {

        next(error);
    }
}
const isAdmin = async (req, res, next) => {
    try {
        if(req.user_type != 'admin')
            throw { code: 401, message: 'Invalid access type' };
        else {
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { authentication, isAdmin }
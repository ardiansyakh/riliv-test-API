const error = (err, req, res, next) => {
    let statusCode
    let msg

    switch (msg) {
        default:
            statusCode = 500
            msg = 'Internal Server Error'
            break;
    }
    res.status(statusCode).json({msg})
}
module.exports = error
const {sign, verify} = require('jsonwebtoken')

const AUTH_SECRET = 'secret'

const generateAccessToken = (data) => sign(data, 'secret')

const verifyAccessToken = ( req, res, next ) => {
    try {
        const { authorization } = req.cookies
        if (!authorization) throw new Error('authorization_not_found')
        const user = verify(authorization, AUTH_SECRET) 
        req.user = user
        next()

    } catch (err) {
        res.status(401).send()
    }
} 

module.exports ={
    generateAccessToken,
    verifyAccessToken
}
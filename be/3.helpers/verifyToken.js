const jwt = require("jsonwebtoken")
const key = require("./key")

module.exports = {
    verifyToken: (req, res, next) => {
        if (req.method !== "OPTIONS") {
            const token = req.headers.authorization
            jwt.verify( token, key, (err, decoded) => {
                if (err) return res.status(401).json({ message: "User not Authorized", error: true })
                else {
                    console.log(decoded)
                    next()
                }
            })
        } else {
            next()
        }
    }
}
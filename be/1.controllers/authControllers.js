const db = require("../database")
const moment = require("moment")
const jwt = require("jsonwebtoken")
const key = require("../3.helpers/key")

module.exports = {
    login: (req, res) => {
        const { email, password } = req.query
        let check = `select id, full_name fullName, email, is_verified isVerified from users
        where email = '${email}' and password = '${password}'`
        db.query(check, (err, results) => {
            try {
                if (err) throw err
                if (results.length === 0) res.send({ status: 401, message: "Wrong email or password!" })
                else {
                    const token = jwt.sign({ email, password }, key, { expiresIn: "12h" })
                    res.send({ status: 200, results, token })   
                }
            } catch (error) {
                console.log('login error', error)
            }
        })
    },

    register: (req, res) => {
        const { fullName, email, cryptPassword } = req.body
        let check = `select email from users where email = '${email}'`
        let insert = `insert into users (id, full_name, email, password, is_verified, created_at)
        values (0, '${fullName}', '${email}', '${cryptPassword}', 0, '${moment().format("YYYY-MM-DD HH:mm:ss.SSS")}')`
        db.query(check, (err1, results1) => {
            try {
                if (err1) throw err1
                if (results1.length > 0) res.send({ message: "Email is already exists!" })
                else {
                    db.query(insert, (err2, results2) => {
                        if (err2) throw err2
                        res.send({ message: "Success created an account!" })
                    })
                }
            } catch (error) {
                console.log('register error', error)
            }
        })
    }

}
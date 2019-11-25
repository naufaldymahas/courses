const mysql = require("mysql")

const db = mysql.createConnection({
    user: "root",
    password: "password",
    database: "new_db",
    host: "localhost"
})

module.exports = db
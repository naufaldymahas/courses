const router = require("express").Router()
const auth = require("../1.controllers/authControllers")


// GET
router.get("/login", auth.login)

// POST
router.post("/register", auth.register)

module.exports = router

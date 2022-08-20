const express = require("express")
const { signup, signin, signout } = require("../controllers/user")
const {check} = require('express-validator')
const router = express.Router()

router.post('/signup', [
    check("name", "Nome deve ter pelo menos 3 caracteres").isLength({min: 3}),
    check("phone", "Telefone deve conter apenas numeros").isNumeric(),
    check("email", "Email deve ser valido").isEmail(),
    check("birth_date", "Data de nascimento invalida").isLength({min: 3}),
    check("password", "Senha deve ter no minimo 6 caracteres").isLength({min: 6}),
], signup)

router.post('/signin', signin)

router.get("/signout", signout)

module.exports = router
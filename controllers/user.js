const User = require("../models/user")
const {validationResult} = require('express-validator')
const user = require("../models/user")
var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')

exports.signup = (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }
    
    const user = new User(req.body)
    user.save((err, user) => {
        if(err) {
            return res.status(400).json( {
                error: "Nao foi possivel adicionar usuario"
            })
        }

     return res.json({
        message: "Sucesso",
        user
     })
    })
}


exports.signin = (req, res) => {
    const {email, password} = req.body

    User.findOne({email}, (err, user) => {
        if(err || !user){
            return res.status(400).json({
                error: "Email nao foi encontrado"
            })
        }

        //Autenticando usuário
        if(!user.authenticate(password)) {
            return res.status(400).json({
                error: "Email e senha nao coincidem"
            })              
        }   

     //Criando um token
     const token = jwt.sign({_id: user._id}, process.env.SECRET)
     
     //Criando token em um cookie
     res.cookie('token', token, {expire: + 1})

     //Mandando resposta
     const {_id, name, email} = user
     
     return res.json({
        token,
        user: {
            _id,
            name,
            email
        }
     })

    })
} 

exports.signout = (req, res) => {
    res.clearCookie("token")
    return res.json({
        message: "Usuario saiu com sucesso"
    })
}
const mongoose = require("mongoose")
const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
var request = require('request');
require("dotenv").config();


//Conectando ao Banco de Dados
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Conectado ao Banco de Dados")
}).catch(() => {
    console.log("Nao foi possivel conectar ao Banco de Dados")
})

//Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Importando as rotas
const userRoutes = require("./routes/user")

//Usando rotas
app.use('/api', userRoutes) // = localhost:500/api/signup

const port = process.env.PORT || 8000

//Começando um servidor
app.listen(port, () => {
    console.log(`Aplicativo rodando na porta ${port}`)
})
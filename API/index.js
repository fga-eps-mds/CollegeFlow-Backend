// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas
const studentRoutes = require('./routes/studentRoutes')
app.use('/students', studentRoutes)

app.get('/', (req, res) => {
    res.json({message: "Express Funciona!"})
})

// entregar uma porta 
mongoose.
    connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.idrjq.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Mongoose Funciona!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
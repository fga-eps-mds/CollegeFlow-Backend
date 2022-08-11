const mongoose = require("mongoose");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
var request = require("request");
require("dotenv").config();

//Conectando ao Banco de Dados
mongoose.connect(
  // Usando variáveis do .env
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database.gtaevsd.mongodb.net/database?retryWrites=true&w=majority`,
  (error) => {
    // Se houve erro, vamos retonar ele no console.log
    if (error) {
      return console.log(
        "Ocorreu um erro ao se conectar com o banco de dados: ",
        error
      );
    }

    //Caso não tenha tudo erro, vamos imprimir que foi bem sucedido
    return console.log("Conexão com o banco de dados realizada com sucesso!");
  }
);

//Use parsing middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Importando as rotas
const userRoutes = require("./routes/user");

//Usando rotas
app.use("/api", userRoutes); // = localhost:500/api/signup

const port = 8000;

//Começando um servidor
app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});

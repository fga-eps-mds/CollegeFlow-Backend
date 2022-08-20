const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const connectToDatabase = require("./config/database/connect");
connectToDatabase();

const subjectModel = require("./config/models/subject");

const app = express();

//Importando as rotas
const subjectRoutes = require("./config/routes/subject");

// //Usando rotas
app.use(subjectRoutes);

const port = 8000;

//Começando um servidor
app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});
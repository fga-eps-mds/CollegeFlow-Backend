const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const connectToDatabase = require("./config/database/connect");
connectToDatabase();

const subjectModel = require("./config/models/subject");

const app = express();
app.use(express.json());

const subjectRoutes = require("./config/routes/subject");

app.use(subjectRoutes);

const port = 8000;

app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});

const mongoose = require("mongoose");
const express = require("express");
const createServer = require("./tests/server") 
require("dotenv").config();

const connectToDatabase = require("./config/database/connect");
connectToDatabase();

const subjectModel = require("./models/subject");

const app = createServer();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});
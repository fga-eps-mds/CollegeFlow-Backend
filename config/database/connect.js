const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database.gtaevsd.mongodb.net/database?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
  await mongoose.connect(
    uri,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }

      return console.log("Conexão com o banco de dados realizada com sucesso!");
    }
  );
};

//Exportando o connect do Mongoose
module.exports = connectToDatabase;
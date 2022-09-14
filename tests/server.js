const express = require("express");
const routes = require("../routes/subject");

function createServer() {
    const app = express();
    app.use(express.json());
    app.use(routes);
    return app;
}

module.exports = createServer
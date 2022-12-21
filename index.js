const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./src/database/index');
const routes = require('./src/router/routes');
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.options("*", cors());

const PORT = process.env.PORT || 3030;

app.use(routes);
app.listen(PORT, () => {
    console.log(`Servidor rodando em: ${PORT}`)
});
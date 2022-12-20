const express = require('express');
const cors = require('cors');
require('dotenv');
require('./src/database/index');

const app = express();

app.options("*", cors());
const routes = require('./src/router');
app.use(express.json());

const PORT = process.env.PORT || 3030;

app.use(routes);
app.listen(PORT, () => {
    console.log(`Servidor rodando em: ${PORT}`)
});
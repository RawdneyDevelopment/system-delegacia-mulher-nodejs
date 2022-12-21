const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./src/database/index");
const userRoutes = require("./src/router/user.routes");
const addressRoutes = require("./src/router/address.routes");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.options("*", cors());

const PORT = process.env.PORT || 3030;

app.use("/v1/api", userRoutes);
app.use("/v1/api", addressRoutes);
app.listen(PORT, () => {
  console.log(`Servidor rodando em: ${PORT}`);
});

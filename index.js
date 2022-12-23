const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
require("./src/database/index");
const victimRoutes = require("./src/router/victim.routes");
const addressRoutes = require("./src/router/address.routes");
const uploadRoutes = require("./src/router/uploadFiles.routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", victimRoutes);
app.use("/api", addressRoutes);
app.use("/api", uploadRoutes);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.options("*", cors());

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Servidor rodando em: ${PORT}`);
});

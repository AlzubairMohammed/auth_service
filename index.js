const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const auth = require("./routes/auth");
const URL = process.env.URL;
const PORT = process.env.PORT;
app.use(`${URL}/auth`, auth);
app.listen(PORT, () => console.log(`App port is ${PORT}`));

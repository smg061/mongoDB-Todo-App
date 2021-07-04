const express = require("express");
const path = require("path");
const app = express();
const routes = require("./controllers");
const PORT = 3001 || process.env.PORT;
const connectToDb = require("./config/mongoose");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(routes);


connectToDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
  });
});

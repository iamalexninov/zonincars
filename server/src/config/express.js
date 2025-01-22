const dotnet = require("dotenv");
const cors = require("cors");
const express = require("express");

const app = express();

function runServer() {
  try {
    dotnet.config();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(process.env.SERVER_PORT, () => {
      console.log("Server On.");
    });
  } catch (error) {
    console.log("Server Error.");
    throw new Error(error);
  }
}

module.exports = {
  runServer,
};

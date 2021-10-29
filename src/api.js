const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi Ilham!!!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    hello: "test!",
  });
});

// app.use("/.netlify/functions/api", router);
app.use("/", router);

module.exports.handler = serverless(app);

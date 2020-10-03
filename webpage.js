const express = require("express");
const webPage = express.Router();

webPage.use(express.static('public'));



webPage.get("/", (req, res) => {
    res.status(201).json({
        message: "it works"
    });
  });

  module.exports = webPage
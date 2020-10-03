const express = require("express");
const two = express();

const webpageRoute = require("./webpage");

two.use("/webpage", webpageRoute);

module.exports = two;

"use strict";

const path = require("path");
const csv = require("csvtojson");

async function readCSV() {
  return csv().fromFile(path.join(__dirname, "..", "resources", "test.csv"));
}

module.exports = {
  readCSV,
};

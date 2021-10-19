"use strict";

const path = require("path");
const Koa = require("koa");
const koaStatic = require("koa-static");

const createRoutes = require("./routes");

// create App
const app = new Koa();

app.use(koaStatic(path.join(__dirname, "..", "client", "public")));

createRoutes(app);

// start listening on port 5000
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});

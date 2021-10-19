"use strict";

const Router = require("@koa/router");

const { readCSV } = require("./csv-reader");

module.exports = (app) => {
  // create Router to add routes easily
  const router = new Router({ prefix: "/api" });

  // add GET /tests route
  router.get("/tests", async (ctx) => {
    // return some data
    ctx.body = {
      tests: await readCSV(),
    };
  });

  app.use(router.routes()).use(router.allowedMethods());
};

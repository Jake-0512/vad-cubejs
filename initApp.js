//import { Application, Request, Response } from 'express';
const { Application, Request, Response } = require("express");

exports.initApp = function (app) {
  app.get('/', (req, res) => {
    res.sendStatus(404);
  });
}
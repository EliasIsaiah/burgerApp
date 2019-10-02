const routes = require('express').Router();
const path = require("path");
const Burger = require("../models/burger.js");

routes.get('/', (req, res) => {

  // res.status(200).json({ message: 'htmlRoutes Connected!' });
  // res.sendFile(path.join(__dirname, "..", "public", "home.html"));
  Burger.findAll({}).then(function (results) {

    res.render("index", { burgers: results });

  }).catch(err => {
    res.status(500)
    throw err
  });

});

module.exports = routes;
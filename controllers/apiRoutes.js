const routes = require('express').Router();
const Burger = require("../models/burger.js");

// const friends = require("../data/friends.js")

routes.post('/add', (req, res) => { //localhost:3000/api

  console.log("body", req.body);

  const { burger_name, devoured } = req.body;

  Burger.create({
    burger_name: burger_name,
    devoured: devoured
  }).then(function (results) {
    res.json(results);
  }).catch(err => { throw err });
});

routes.get("/all", function (req, res) {

  // Finding all Chirps, and then returning them to the user as JSON.
  // Sequelize queries are asynchronous, which helps with perceived speed.
  // If we want something to be guaranteed to happen after the query, we'll use
  // the .then function
  Burger.findAll({}).then(function (results) {

    console.log(results);
    res.json(results);

  }).catch(err => { throw err });
});

module.exports = routes;
const routes = require('express').Router();
const Burger = require("../models/burger.js");

// const friends = require("../data/friends.js")

routes.post('/add/:name', (req, res) => { //localhost:3000/api
  // res.status(200).json({ message: 'apiRoutes Connected!' });
  // res.json(friends.addFriend(req.body.name, req.body.photo, req.body.answers));
  Burger.create({
    burger_name: `${req.param.name}`,
    devoured: false
  }).then(function(results) {
    res.json(results);
  }).catch(err => { throw err });
  // friends.addFriend(req.body.name, req.body.photo, req.body.answers);
});

routes.get("/all", function(req, res) {

  // Finding all Chirps, and then returning them to the user as JSON.
  // Sequelize queries are asynchronous, which helps with perceived speed.
  // If we want something to be guaranteed to happen after the query, we'll use
  // the .then function
  Burger.findAll({}).then(function(results) {
    // results are available to us inside the .then
    res.json(results);
  });

});

module.exports = routes;
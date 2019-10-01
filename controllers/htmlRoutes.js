const routes = require('express').Router();
const path = require("path");

routes.get('/', (req, res) => {

  // res.status(200).json({ message: 'htmlRoutes Connected!' });
  // res.sendFile(path.join(__dirname, "..", "public", "home.html"));
  res.render("index");
});

module.exports = routes;
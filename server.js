const express = require("express");
const path = require("path");

var exphbs = require("express-handlebars");

const routes = require('./controllers/index.js');

// app.use(express.static(path.join(__dirname, 'app')));

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;


// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'burgerApp')));

app.use('/', routes);


// Turn on that server!
app.listen(PORT, () => {
  console.log('App listening on port 3000');
});
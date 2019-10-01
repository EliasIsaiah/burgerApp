const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('burgerDatabase', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Model = Sequelize.Model;

class Burger extends Model { }
Burger.init({
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
}, { sequelize, modelName: 'burger' });

sequelize.sync({ force: true })
    .then(() => Burger.create({
        burger_name: 'cheeseburger',
        devoured: false
    }))
    .then(data => {
        console.log(data.toJSON());
    });

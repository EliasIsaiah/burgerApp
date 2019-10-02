const Sequelize = require('sequelize');
const uuid = require('uuid/v4');

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
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    burger_name: {
      type: Sequelize.STRING
    },
    devoured: {
      type: Sequelize.BOOLEAN
    }
}, { sequelize, modelName: 'burger' });

// Burger.beforeCreate((burger, _ ) => {
//   return burger.id = uuid();
// });
// return Burger;

sequelize.sync({ force: true })
    .then(() => Burger.create({
        burger_name: 'cheeseburger',
        devoured: false
    })).then(() => Burger.create({
      burger_name: 'hamburger',
      devoured: false
  })).then(() => Burger.create({
    burger_name: 'veggieburger',
    devoured: false
})).then(data => {
        console.log(data.toJSON());
    });

module.exports = Burger;
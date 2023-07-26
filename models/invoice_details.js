import { Sequelize, DataTypes }from"sequelize";
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('invoice_details', {
 //pending 

});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
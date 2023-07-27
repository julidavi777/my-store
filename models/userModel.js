import { Sequelize, DataTypes }from"sequelize";
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false

    // allowNull defaults to true
  },
  address:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: Datatypes.STRING,
    allowNull: false
  },
  email: {
    type: Datatypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
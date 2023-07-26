import { Sequelize, DataTypes }from"sequelize";
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  
  number: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  card_holder: {
    type: DataTypes.STRING,
    allowNull: false

    // allowNull defaults to true
  },
  expiration_date:{
    type: DataTypes.DATE,
    allowNull: false
  },
  enterprise: {
    type: Datatypes.STRING,
    allowNull: false,
    validate:{
        isIn:
            [
                'visa',
                'mastercard'
            ]
    }
  },
  cvc: {
    type: Datatypes.STRING(5),
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
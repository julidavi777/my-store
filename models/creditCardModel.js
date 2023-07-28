import { Sequelize, DataTypes }from"sequelize";
const sequelize = new Sequelize('mariadb::memory:');

const CreditCard = sequelize.define('CreditCard', {
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
    type: DataTypes.STRING,
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
    type: DataTypes.STRING(5),
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(CreditCard === sequelize.models.CreditCard); // true
export default CreditCard; 

import { Sequelize, DataTypes }from"sequelize";
const sequelize = new Sequelize('mariadb::memory:');

const ProductToSellers = sequelize.define('products_to_sellers', {
  // Model attributes are defined here
  date:{
    type: DataTypes.DATE,
    allowNull: false
  },  
  quantity: {
    type: DataTypes.INT,
    allowNull: false
  },
  unit_price: {
    type: DataTypes.DECIMAL,
    allowNull: false

    // allowNull defaults to true
  },
  total: {
    type: DataTypes.DECIMAL,
    allowNull: false

    // allowNull defaults to true
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
console.log(ProductToSellers === sequelize.models.ProductToSellers); // true
export default ProductToSellers; 

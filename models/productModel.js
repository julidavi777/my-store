import { Sequelize, DataTypes }from"sequelize";
const sequelize = new Sequelize('mariadb::memory:');

const Product = sequelize.define('Product', {
  // Model attributes are defined here
  

  description: {
    type: DataTypes.STRING,
    allowNull: false

    // allowNull defaults to true
  },
  photo:{
    type: DataTypes.STRING,
    allowNull: false
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Product === sequelize.models.Product); // true
export default Product; 

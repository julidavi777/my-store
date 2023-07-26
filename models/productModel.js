import { Sequelize, DataTypes }from"sequelize";
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isIn: [
            'vehicles',
            'supermarket',
            'technology',
            'appliances',
            'Home & Furniture',
            'Sports & Fitness',
            'Beauty & personal Care',
            'Vehicle Accesories',
            'Tools',
            'Construction',
            'Properties',
            'Internacional Purchase',
            'Fashion',
            'Games & toys',
            'Babies',
            'Sustainable Products',
            'Health and Medical Equipment',
            'Industries and Offices',
            'Services',
            'Official stores',
        ],
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false

    // allowNull defaults to true
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: Datatypes.INT,
    allowNull: false
  },
  price: {
    type: Datatypes.DECIMAL,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
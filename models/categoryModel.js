import { Sequelize, DataTypes }from"sequelize";
const sequelize = new Sequelize('mariadb::memory:');

const Category = sequelize.define('Category', {
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
});

// `sequelize.define` also returns the model
console.log(Category === sequelize.models.Category); // true
export default Category; 

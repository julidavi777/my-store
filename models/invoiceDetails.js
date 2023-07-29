import { Sequelize, DataTypes }from"sequelize";
const sequelize = new Sequelize('mariadb::memory:');

const InvoiceDetails = sequelize.define('invoice_details', {
 //pending 

});

// `sequelize.define` also returns the model
console.log(InvoiceDetails === sequelize.models.InvoiceDetails); // true
export default InvoiceDetails; 

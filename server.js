import {Sequelize} from "sequelize";
import  dotenv  from "dotenv/config"
import express  from "express"
import  mariadb from "mariadb"
const {PORT = 3000} = process.env;

const app = express();

const sequelize = new Sequelize(process.env.MDB_DATABASE,process.env.MDB_USER,process.env.MDB_PASSWORD, {
  host:process.env.MDB_HOST,

  dialect:   'mariadb',
  port: process.env.MDB_PORT,
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


/* 
 async function main() {
  let conn;

  try {
     conn = await mariadb.createConnection({
        host: process.env.MDB_HOST,
        port: process.env.MDB_PORT,
        user: process.env.MDB_USER,
        password: process.env.MDB_PASSWORD,
        database: process.env.MDB_DATABASE
     });
     console.log('dabatase connection success');


  } catch (err) {
     console.log("SQL error in establishing a connection: ", err);
  } finally {
     if (conn) conn.close();
  }
}

main();
 */

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});



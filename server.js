import "dotenv/config"; // loads variables from .env file
import express from "express";
import * as paypal from "./paypal-api.js";
import mariadb from "mariadb"; 
const {PORT = 3000} = process.env;
const app = express();

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


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});



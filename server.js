import {Sequelize} from "sequelize";
import ejs from "ejs"; 
import  dotenv  from "dotenv/config"
import express  from "express"
import path, { dirname } from "path"
import { fileURLToPath } from 'url';
import { title } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const {PORT = 3000} = process.env;
const app = express();

const sequelize = new Sequelize(process.env.MDB_DATABASE,process.env.MDB_USER,process.env.MDB_PASSWORD, {
  host:process.env.MDB_HOST,

  dialect:   'mariadb',
  port: process.env.MDB_PORT,
});

try {
  await sequelize.authenticate();
  console.log('database conected.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(express.static(path.join(__dirname, 'public')))
 
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/src/views/')); 

app.get('/', function(req, res) {
  res.render('users/login', {title: 'Inicia sesión '});
});

app.get('/signup', function(req, res) {
  res.render('users/signup', {title: 'Registrate aqui!'});
});

app.get('/products', function(req, res) {
  res.render('products/index', {title: 'Productos'});
});


console.log(path.join(__dirname, 'src/views'));
app.listen(PORT, () => {
  console.log(`server on port: ${PORT}/`);
});



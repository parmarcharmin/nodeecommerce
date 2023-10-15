const express = require('express')
const bodyParser= require('body-parser')
const connectDatabase = require('./db')
const userRoutes = require('./routes/User')
const productRoutes = require('./routes/Products')

const cors = require('cors');

const app = express()
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

connectDatabase();

app.use(cors());
app.use("/",userRoutes)
app.use("/",productRoutes)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000,()=>{
    console.log("the server is running at http://localhost:8000/");
})
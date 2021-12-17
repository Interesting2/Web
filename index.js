const express = require('express');
const path = require('path');
const {Client} = require('pg');

const app = express();
// const body_parser = require('body-parser');
// const json_parser = body_parser.json();

const port = 3000;

/* routes */
const productRoutes = require('./routes/products');
const pageRoutes = require('./routes/load_page');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(json_parser);
// app.use(body_parser.urlencoded({extended: true}));
// app.use(json_parser);
// declare static path 
let staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

// // home route
// app.get('/', (req, res) => res.sendFile(path.join('views', 'index.ejs')));
app.get('/favicon.ico' , function(req , res){/*code*/});

app.use(pageRoutes);
app.use(productRoutes);

app.listen(process.env.PORT || port, () => console.log(`Ecommerce App listening on port ${port}!`));
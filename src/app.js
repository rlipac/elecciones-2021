const express = require('express'); // llamamos express
const path = require('path'); 
const morgan = require('morgan'); // sirve para visualizar las respuestas de las peticiones o cambios realizados
const mysql = require('mysql');
const myConnection = require('express-myconnection');


/* declacracion de variables app */

const app = express();
 /* importing routes */

 const votantesRoute = require('./routes/candidatos');


/* Sttings */

// app.set('port', process.env.PORT || 5000);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname), 'views');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* middleware */

// app.use(morgan('dev')); // visualiza las peticiones y cambios 
// app.use(myConnection(mysql, { // configuramos la coneccion ala BD
//     host: 'localhost',
//     user:'root',
//     password: '',
//     port: 3306,
//     database: 'elecciones_2020'
// }, 'single'));

// HEROKU POSTGRES

app.use(morgan('dev')); // visualiza las peticiones y cambios 
app.use(myConnection(mysql, { // configuramos la coneccion ala BD
    host: 'remotemysql.com',
    user:'',
    password: '',
    port: 8080,
    database: ''
}, 'single'));



app.use(express.urlencoded({extended: false}));

/* routes */

app.use('/', votantesRoute);

/* static files */

app.use(express.static(path.join(__dirname, 'public')));

/* starting the server */

app.listen(app.get('port'), () => {
   //
    console.log('excuchando en el puerto 3000');
})

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const auth_controller = require('./controllers/auth_controller');
const session = require('express-session');
const prop_controller = require('./controllers/prop_controller');

const app = express(); 

app.use ( bodyParser.json() );
app.use ( cors() );
app.use( session ({
    secret: 'ginger',
    resave: false, 
    saveUnitialized: true
}))

massive( process.env.CONNECTION_STRING ).then ( dbInstance => app.set('db', dbInstance) );

app.post('/api/Houser_auth2', auth_controller.register);
app.post('/api/Houser_auth2/login', auth_controller.login);
app.post('/api/Houser_prop', prop_controller.create);


const port = process.env.PORT || 3100;
app.listen 
( port, () => {console.log(`Tuned in to chanel ${port}`); } ); 


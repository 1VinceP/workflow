const express = require('express')
const bodyParser = require('body-parser')
const createInitialSession = require(`${__dirname}/middleware/session-check`)
const massive = require('massive')
const cors = require('cors')
const session = require('express-session')

const port = 3000;

const app = express();

app.use(bodyParser.json() );
app.use(cors() );

app.use(session({
    secret:process /** CREATE .ENV FILE AND CREATE SECRET**/,
    resave: false,
    saveUninitialized: false
}))














app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})





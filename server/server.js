require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const createInitialSession = require(`${__dirname}/middleware/session-check`)
const massive = require('massive')
const cors = require('cors')
const session = require('express-session')
const companyController = require('./controllers/company_controller')

const port = 3005;

const app = express();


app.use(bodyParser.json() );
app.use(cors() );

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
})


app.use(session({
    secret:process.env.SECRET, 
    resave: false,
    saveUninitialized: false
}))



//
////
//////
////////////////////////////        SERVER GETS         /////////////////////////////////
//////
////
//





////////////////////////////        COMPANY         /////////////////////////////////



app.get('/api/test', (req, res, next) => {
    req.app.get('db').company.all_company().then(response => res.status(200).send(response))
})


app.post('/api/addcompany', companyController.createCompany)


////////////////////////////        TEAM         /////////////////////////////////





app.get('/api/test/team', (req, res, next) => {
    req.app.get('db').team.all_team().then(response => res.status(200).send(response))
})





////////////////////////////        PROJECT         /////////////////////////////////




app.get('/api/test/project', (req, res, next) => {
    req.app.get('db').project.all_project().then(response => res.status(200).send(response))
})



////////////////////////////        TASK         /////////////////////////////////




app.get('/api/test/task', (req, res, next) => {
    req.app.get('db').task.all_task().then(response => res.status(200).send(response))
})




////////////////////////////        USERS         /////////////////////////////////


app.get('/api/test/users', (req, res, next) => {
    req.app.get('db').users.all_users().then(response => res.status(200).send(response))
})




app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})





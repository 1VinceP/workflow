require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const createInitialSession = require(`${__dirname}/middleware/session-check`)
const massive = require('massive')
const cors = require('cors')
const session = require('express-session')
const auth_controller = require( './controllers/auth_controller' )
const chalk = require('chalk')

const company_controller = require('./controllers/company_controller')
const project_controller = require('./controllers/project_controller')
const team_controller = require('./controllers/team_controller')
const task_controller = require('./controllers/task_controller')
const role_controller = require('./controllers/role_controller')
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
app.use(passport.initialize());
app.use(passport.session());
//////////////////////////////    Authentication \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // console.log(profile)
    const db = app.get('db');
    console.log( chalk.greenBright('profile: ', profile.id) )
    db.users.find_user(profile.id).then(user => {
        if (user[0]) {
            console.log( chalk.greenBright('strategy:'), user )
            return done(null, user);
        } else {
            db.users.create_user([profile.displayName, profile.emails[0].value, profile.picture, profile.id])
                .then(user => {
                    return done(null, user);
                })
        }
    })
}))

passport.serializeUser( (user, done) => {
    console.log( chalk.greenBright('serial: '), user );
    done( null, user );
})

//USER COMES FROM SESSION - INVOKED ON EVERY ENDPOINT.
passport.deserializeUser( (obj, done) => {
        return done(null, obj[0]);
})
app.get('/login', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: 'http://localhost:3000/#/'
}));

app.get( '/login/user', auth_controller.login );
app.get( '/logout', auth_controller.logout );

//
////
//////
////////////////////////////        SERVER GETS         /////////////////////////////////
//////
////
//



////////////////////////////        COMPANY         /////////////////////////////////



app.get('/api/test/getusers', (req, res, next) => {
    req.app.get('db').company.company_users().then(response => res.status(200).send(response))
})
app.post('/api/addcompany', company_controller.create_company)




////////////////////////////        TEAM         /////////////////////////////////



app.get('/api/test/team', (req, res, next) => {
    req.app.get('db').team.all_team().then(response => res.status(200).send(response))
})

app.post('/api/addteam', team_controller.create_team)

////////////////////////////        PROJECT         /////////////////////////////////



app.get('/api/test/project', (req, res, next) => {
    req.app.get('db').project.all_project().then(response => res.status(200).send(response))
})

app.post('/api/addproject', project_controller.create_project)

////////////////////////////        TASK         /////////////////////////////////



app.get('/api/test/task', (req, res, next) => {
    req.app.get('db').task.all_task().then(response => res.status(200).send(response))
})

app.post('/api/addtask', task_controller.create_task)

////////////////////////////        USERS         /////////////////////////////////




app.get('/api/test/users', (req, res, next) => {
    req.app.get('db').users.all_users().then(response => res.status(200).send(response))
})




////////////////////////////        ROLES         /////////////////////////////////

app.get('/api/roles', (req,res,next) => {
    req.app.get('db').roles.all_roles().then(response => res.status(200).send(response))
})

app.get('/api/roles/users', (req,res,next) => {
    let {query} = req
    req.app.get('db').roles.users_for_roles(parseInt(query.users)).then(response => res.status(200).send(response))
})

app.post('/api/addrole', role_controller.create_role)



app.listen(port, ()=>{
    console.log( chalk.cyan.underline(`Listening_on_port_${port}`) )
})
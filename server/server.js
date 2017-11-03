require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const createInitialSession = require(`${__dirname}/middleware/session-check`)
const massive = require('massive')
const cors = require('cors')
const session = require('express-session')
const auth_controller = require('./controllers/auth_controller')
const chalk = require('chalk')

const company_controller = require('./controllers/company_controller')
const project_controller = require('./controllers/project_controller')
const team_controller = require('./controllers/team_controller')
const task_controller = require('./controllers/task_controller')
const role_controller = require('./controllers/role_controller')
const users_controller = require('./controllers/users_controller')


const app = express();
app.use(bodyParser.json());
app.use(cors());

let userStuff;



massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
})
app.use(session({
    secret: process.env.SECRET,
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
    const db = app.get('db');
    db.users.find_user(profile.id).then(user => {
        if (user[0]) {
            userStuff = true
            return done(null, user);
        } else {
            userStuff =  false
            db.users.create_user([profile.displayName, profile.emails[0].value, profile.picture, profile.id])
                .then(user => {
                    return done(null, user);
                })
        }
    })
}))

passport.serializeUser((user, done) => {
    if(user[0].user_company === null){
        userStuff = false
    } else {userStuff =  true}
    done(null, user);
})

//USER COMES FROM SESSION - INVOKED ON EVERY ENDPOINT.
passport.deserializeUser((obj, done) => {
    return done(null, obj[0]);
})
app.get('/login', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/loading-page',
    failureRedirect: 'http://localhost:3000/#/'
}));

app.get('/login/user', auth_controller.login);
app.get('/logout', auth_controller.logout);
app.get('/logout-joined', auth_controller.logout_joined);


app.get('/auth/authorized', (req, res) => {
    if (!req.user) {
        return res.status(403).send(false)
    } else {
        return res.status(200).send(req.user);
    }
})

//
////
//////
////////////////////////////        SERVER GETS         /////////////////////////////////
//////
////
//
////////////////////////////        ANALYTICS         /////////////////////////////////


app.get('/api/company/analytics/table/:id', (req, res, next) => {
    req.app.get('db').analytics.get_task_completed(req.params.id).then(response => res.status(200).send(response))
})

app.post('/api/company/analytics/tasks/completed', users_controller.get_tasks_completed_for_user)

app.post('/api/company/analytics/tasks/all', users_controller.get_all_tasks_for_user)



////////////////////////////        COMPANY         /////////////////////////////////



// app.get('/api/company/getusers', (req, res, next) => {
//     req.app.get('db').company.company_users().then(response => res.status(200).send(response))
// })

// app.get('/api/company/:id', (req, res, next) => {
//     req.app.get('db').company.get_company(req.params.id).then(response => res.status(200).send(response))
// })

// app.get('/api/company/users/:id', (req, res, next) => {
//     req.app.get('db').company.company_users(req.params.id).then(response => res.status(200).send(response))
// })

app.get('/api/company/team/:id', (req, res, next) => {
    req.app.get('db').company.company_team(req.params.id).then(response => res.status(200).send(response))
})

app.get('/api/company/project/:id', (req, res, next) => {
    req.app.get('db').company.company_project(req.params.id).then(response => res.status(200).send(response))
})



app.get('/api/company/getteams', (req, res, next) => {
    req.app.get('db').company.company_teams(req.params.id).then(response => res.status(200).send(response))
})

app.get('/api/company/get_users_tasks/:id', (req, res, next) => {
    req.app.get('db').analytics.get_company_tasks(req.params.id).then(response => res.status(200).send(response))
})





app.get('/api/company_code/:id', company_controller.getCompanyCode)

app.get('/api/company_notifications/:id', company_controller.getCompanyNotifications)




app.get('/api/company/getusers', company_controller.getCompanyUsers)
app.get('/api/company/:id', company_controller.getCompany)
app.get('/api/company/users/:id', company_controller.getCompanyUsersById)

app.post('/api/addcompany', company_controller.create_company)

////////////////////////////        TEAM         /////////////////////////////////

app.get('/api/team', team_controller.get_team)


app.get('/api/team', (req, res, next) => {
    req.app.get('db').team.all_team().then(response => res.status(200).send(response))
})

app.delete('/api/delete/team/:id', (req, res, next) => {
    req.app.get('db').team.delete_team(req.params.id).then(response => res.status(200).send(response))
})

app.post('/api/addteam', team_controller.add_team)
app.post('/api/editteam', team_controller.edit_team)

////////////////////////////        PROJECT         /////////////////////////////////

app.get('/api/project', project_controller.get_projects)

app.delete('/api/delete/project/:id', project_controller.delete_project)

app.post('/api/addproject', project_controller.create_project)
app.post('/api/editproject', project_controller.edit_project)

////////////////////////////        TASK         /////////////////////////////////

app.get( '/api/getUserTasks/:id', task_controller.get_user_tasks )
app.get( '/api/getProjectTasks/:key', task_controller.get_project_tasks )

app.post( '/api/addtask/:key', task_controller.create_task )

app.put( '/api/completeTask/:id/:number/:key', task_controller.complete_task )

app.delete( '/api/deleteTask/:id/:key', task_controller.delete_task )

app.get('/api/getMoney/byTask/:id', (req, res, next) => {
    req.app.get('db').analytics.get_average_money_per_user_task(req.params.id).then(response => res.status(200).send(response))
})
app.get('/api/getTaskTotal/:id', (req, res, next) => {
    req.app.get('db').analytics.get_task_total(req.params.id).then(response => res.status(200).send(response))
})

////////////////////////////        USERS         /////////////////////////////////

app.get('/api/users', users_controller.get_users)
app.get('/api/users/user/:id', users_controller.get_user_by_id)

app.post('/api/edituser', users_controller.edit_user)
app.post('/api/adduser', users_controller.create_user)
app.post('/api/admin/adduser', users_controller.admin_create_user)

app.post('/api/edituser/team', users_controller.edit_user_team)
app.post('/api/edituser/removeteam/:id', users_controller.remove_user_team)
app.put(`/api/company_code`, users_controller.update_company_id_code)


app.delete('/api/delete/user/:id', users_controller.delete_user)


////////////////////////////        ROLES         /////////////////////////////////

app.get('/api/roles', role_controller.get_roles)
app.get('/api/roles/users', role_controller.get_user_roles)

app.post('/api/addrole', role_controller.create_role)


////////////////////////////            Notifications            ////////////////////////////
app.post('/api/add-notification', company_controller.create_notification)
app.delete('/api/delete_notification/:id',  company_controller.delete_notification)







const port = 3005;
app.listen(port, ()=>{
    console.log( chalk.cyan.underline(`Listening_on_port_${port}`) )
})

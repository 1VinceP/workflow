module.exports = {

        get_users: (req, res, next) => {
            req.app.get('db').users.all_users().then(response => res.status(200).send(response))
        },

        get_user_by_id: (req, res, nest) => {
            req.app.get('db').users.user_by_id(req.params.id).then(response => res.status(200).send(response))
        },
    
        create_user: (req,res,next) => {
            let {user_firstname, user_lastname, user_email, user_team} = req.body;
            
            req.app.get('db').company.add_company(user_firstname, user_lastname, user_email, user_team)
            .then( () => res.status(200).send() );
        },

        admin_create_user: (req, res, next) => {
            let {user_firstname, user_lastname, user_email, user_team, user_role, user_company} = req.body;
        
            req.app.get('db').users.admin_create_user(user_firstname, user_lastname, user_email, user_team, user_role, user_company)
            .then( () => res.status(200).send() );
        },

        edit_user: (req,res,next) => {
            let {user_firstname, user_lastname, user_email, user_id, user_role} = req.body;
            
            req.app.get('db').users.edit_user(user_firstname, user_lastname, user_email, user_id, user_role)
            .then( () => res.status(200).send() );
        },

        delete_user: (req, res, next) => {
            req.app.get('db').users.delete_user(req.params.id).then(response => res.status(200).send(response))
        },

        edit_user_team: (req,res,next) => {
            let {user_team, user_id} = req.body;
            
            req.app.get('db').users.edit_user_team(user_team, user_id)
            .then( () => res.status(200).send() );
        },

        remove_user_team: (req,res,next) => {            
            req.app.get('db').users.remove_user_team(req.params.id).then( response => res.status(200).send(response) );
        }, 
        
        update_company_id_code: (req,res,next) =>{
            let {user_company, user_id} = req.body;
            
            req.app.get('db').users.update_user_company_code(user_company, user_id)
            .then( () => res.status(200).send() );

        },
        get_user_by_email: (req, res, nest) => {
            req.app.get('db').users.user_by_email(req.params.id).then(response => res.status(200).send(response))
        },

        get_tasks_completed_for_user: (req, res, next) => {
            let {user_company, user_id} = req.body

            req.app.get('db').analytics.count_users_tasks_completed(user_company, user_id)
            .then( response => res.status(200).send(response))
        },

        get_all_tasks_for_user: (req, res, next) => {
            let {user_company, user_id} = req.body
            console.log("CONTROLLER", req.body)
            req.app.get('db').analytics.all_tasks_for_users(user_company, user_id)
            .then( response => res.status(200).send(response))
        }

    }
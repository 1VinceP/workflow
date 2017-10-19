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
            let {user_firstname, user_lastname, user_display_name, user_id} = req.body;
            
            req.app.get('db').users.edit_user(user_firstname, user_lastname, user_display_name, user_id)
            .then( () => res.status(200).send() );
        },

        delete_user: (req, res, nest) => {
            req.app.get('db').users.delete_user(req.params.id).then(response => res.status(200).send(response))
        }
    }
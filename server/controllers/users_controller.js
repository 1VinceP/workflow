module.exports = {
    
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
        }
    }
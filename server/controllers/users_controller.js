module.exports = {
    
        create_user: (req,res,next) => {
            let {user_firstname, user_lastname, user_email, user_display_name, user_team, user_picture} = req.body;
            
            req.app.get('db').company.add_company(user_firstname, user_lastname, user_email, user_display_name, user_team, user_picture)
            .then( () => res.status(200).send() );
        },

        edit_user: (req,res,next) => {
            let {user_firstname, user_lastname, user_display_name, user_id} = req.body;
            
            req.app.get('db').users.edit_user(user_firstname, user_lastname, user_display_name, user_id)
            .then( () => res.status(200).send() );
        }
    }
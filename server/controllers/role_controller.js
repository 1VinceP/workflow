module.exports = {

        get_roles: (req,res,next) => {
            req.app.get('db').roles.all_roles().then(response => res.status(200).send(response))
        },

        get_user_roles: (req,res,next) => {
            let {query} = req
            req.app.get('db').roles.users_for_roles(parseInt(query.users)).then(response => res.status(200).send(response))
        },
    
        create_role: (req,res,next) => {
            let {role_name, role_company} = req.body;
            
            req.app.get('db').roles.add_role(role_name, role_company)
            .then(prop => res.status(200).send(prop))
        }
    }
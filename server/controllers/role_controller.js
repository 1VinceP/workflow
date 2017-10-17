module.exports = {
    
        create_role: (req,res,next) => {
            let {role_name, role_company} = req.body;
            
            req.app.get('db').roles.add_role(role_name, role_company)
            .then(prop => res.status(200).send(prop))
        }
    }
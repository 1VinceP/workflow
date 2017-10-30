module.exports = {

        get_projects: (req, res, next) => {
            req.app.get('db').project.all_project().then(response => res.status(200).send(response))
        },
    
        create_project: (req,res,next) => {
            let {project_name, project_start_date, project_finished_date, project_description, project_company, project_price, project_paid, project_creator, project_unique_key} = req.body;
            
            req.app.get('db').project.add_project(project_name, project_start_date, project_finished_date, project_description, project_company, project_price, project_paid, project_creator, project_unique_key)
            .then(prop => res.status(200).send(prop))
        },

        delete_project: (req, res, next) => {
            req.app.get('db').project.delete_project(req.params.id).then(response => res.status(200).send(response))
        },
        edit_project: (req,res,next) => {
            let {project_name, project_start_date, project_finished_date, project_description, project_price, project_id} = req.body;
            console.log(req.body)
            
            req.app.get('db').project.edit_project(project_name, project_start_date, project_finished_date, project_description, project_price, project_id)
            .then( () => res.status(200).send() );
        },
    }
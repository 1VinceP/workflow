module.exports = {

        get_projects: (req, res, next) => {
            req.app.get('db').project.all_project().then(response => res.status(200).send(response))
        },
    
        create_project: (req,res,next) => {
            let {project_name, project_start_date, project_finished_date, project_description, project_company} = req.body;
            
            req.app.get('db').project.add_project(project_name, project_start_date, project_finished_date, project_description, project_company)
            .then(prop => res.status(200).send(prop))
        }
    }
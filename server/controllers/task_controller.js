module.exports = {

        get_user_tasks: (req, res, next) => {
            req.app.get('db').task.get_user_tasks( req.params.id )
                .then(response => res.status(200).send(response))
        },
        
        get_project_tasks: ( req, res, next ) => {
            req.app.get('db').task.get_project_tasks( req.params.key )
                .then( response => res.status(200).send(response) )
                    .catch( err => console.log( 'error', err ) )
        },
    
        create_task: (req,res,next) => {
            let {task_name, task_start_date, task_finished_date, task_user_1, task_description, task_role, task_unique_key, task_show, task_link, task_number} = req.body;

            req.app.get('db').task.add_task(task_name, task_start_date, task_finished_date, task_user_1, task_description, task_role, task_unique_key, task_show, task_link, task_number, req.params.key)
                .then( prop => res.status(200).send(prop) )
        },

        complete_task: ( req, res, next ) => {
            let lastTask = req.params.number - 1
            req.app.get('db').task.complete_task( req.params.id, req.params.number, req.params.key, lastTask + '' )
                .then( response => {
                    res.status(200).send(response)
                } )
                .catch( err => console.log( err ) )
        },

        delete_task: ( req, res, next ) => {
            req.app.get('db').task.delete_task( req.params.id, req.params.key )
                .then( response => res.status(200).send(response) )
        }
    }
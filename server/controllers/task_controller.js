module.exports = {
    
        create_task: (req,res,next) => {
            let {task_name, task_start_date, task_finished_date, task_description, task_user_1} = req.body;
            
            req.app.get('db').task.add_task(task_name, task_start_date, task_finished_date, task_description, task_user_1)
            .then(prop => res.status(200).send(prop))
        }
    }
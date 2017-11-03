UPDATE Task
    SET task_completed = true
        WHERE task_id = $1;

UPDATE Task
    SET task_show = true
        WHERE task_number = $2 AND task_unique_key = $3;

UPDATE Project
    SET project_paid = true
        WHERE project_last_task = $4 AND project_unique_key = $3; 
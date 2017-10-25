UPDATE Task
    SET task_completed = true
        WHERE task_id = $1;

UPDATE Task
    SET task_show = true
        WHERE task_number = $2 AND task_unique_key = $3;
DELETE FROM task
    WHERE task_id = $1;

SELECT * FROM task
    WHERE task_unique_key = $2;
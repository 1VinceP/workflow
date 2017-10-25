INSERT INTO task
(task_name, task_start_date, task_finished_date, task_user_1, task_description, task_role, task_unique_key, task_show, task_link, task_completed, task_number)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, false, $10);

SELECT * FROM task
    WHERE task_unique_key = $11;
INSERT INTO project
(project_name, project_start_date, project_finished_date, project_description, project_company, project_price, project_paid, project_creator, project_unique_key, project_last_task)

VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10);

UPDATE task
SET task_show = true
WHERE task_unique_key = $9 AND task_number = 1;
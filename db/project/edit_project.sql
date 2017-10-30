UPDATE project
SET project_name = $1, project_start_date = $2,  project_finished_date = $3, project_description = $4, project_price = $5
WHERE project_id = $6

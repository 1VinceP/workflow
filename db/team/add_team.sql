INSERT INTO team 
(team_name, team_date, team_description, team_projects_completed, team_company)
VALUES ($1, $2, $3, $4, $5)
returning *;
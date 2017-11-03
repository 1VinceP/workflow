INSERT INTO team 
(team_name, team_description, team_company)
VALUES ($1, $2, $3)
returning *;
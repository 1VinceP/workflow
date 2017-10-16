insert into users
(user_firstname, user_lastname, user_company, user_team, user_role)
values ($2, $3, $4, $5, $6)
where user_id = $1
returning *;
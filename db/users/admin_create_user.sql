insert into users
(user_firstname, user_lastname, user_email, user_team, user_role, user_company)
values($1, $2, $3, $4, $5, $6)
returning *;
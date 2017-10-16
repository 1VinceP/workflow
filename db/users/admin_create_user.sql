insert into users
(user_firstname, user_lastname, user_email, user_picture, user_display_name, user_company, user_team, user_role)
values($1, $2, $3, $4, $5, $6, $7, $8)
returning *;
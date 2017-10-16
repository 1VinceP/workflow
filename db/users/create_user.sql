insert into users
(user_display_name, user_email, user_picture, user_auth_id)
values ($1, $2, $3, $4)
returning *;
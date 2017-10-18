UPDATE users
SET user_firstname = $1, user_lastname = $2,  user_display_name = $3
WHERE user_id = $4

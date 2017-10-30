UPDATE users
SET user_firstname = $1, user_lastname = $2,  user_email = $3, user_role = $5
WHERE user_id = $4

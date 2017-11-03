UPDATE users
SET user_team = null
WHERE user_id = $1

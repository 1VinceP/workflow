UPDATE users
SET user_team = $1
WHERE user_id = $2;

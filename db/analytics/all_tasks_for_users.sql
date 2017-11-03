select count(*)
from task
inner join project on task_unique_key = project_unique_key
inner join users on task_user_1 = user_id
where user_company = 44  AND user_id = 145;
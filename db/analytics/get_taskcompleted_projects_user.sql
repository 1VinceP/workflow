select *
from task
inner join project on task_unique_key = project_unique_key
inner join users on task_user_1 = user_id
where user_company = $1 AND task_completed = true;
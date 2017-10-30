select * 
from task
LEFT join project ON task_unique_key = project_unique_key
full outer join users ON task_user_1 = user_id
where project_company = $1
where ;
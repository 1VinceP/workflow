select sum(project_price) from project
where project_company = $1;


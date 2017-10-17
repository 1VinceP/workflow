/* 


THESE

HAVE

BEEN

ADDED.

THERES ARE HERE FOR REFERENCING








CREATE TABLE company(
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR,
    company_phone INTEGER,
    company_email TEXT,
    company_logo TEXT,
    company_date DATE(),
    company_industry TEXT
)




CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_firstname TEXT,
    user_lastname TEXT,
    user_email TEXT,
    user_display_name TEXT,
    user_company INTEGER,
    user_team INTEGER,
    FOREIGN KEY (user_company) REFERENCES company(company_id),
    FOREIGN KEY (user_team) REFERENCES team(team_id),
    user_auth_id TEXT,
    user_role TEXT
)


 INSERT INTO project(project_name, project_start_date, project_finished_date, project_description, project_company)
 VALUES (
    
     'sell more stuff',
     '10-20-2017',
     null,
     'sell more stuff',
     4
 )


INSERT INTO users(user_firstname, user_lastname, user_email, user_display_name, user_company, user_team, user_auth_id, user_role)
VALUES (
    'janice',
    'doe',
    'jane@gmail.com',
    'jane',
    2,
    1,
    null,
    'baller'
)



CREATE TABLE task (
    task_id SERIAL PRIMARY KEY,
    task_name TEXT,
    task_start_date DATE,
    task_finished_date DATE,
    task_description TEXT,
    task_user_1 INTEGER,
    task_user_2 INTEGER,
    task_user_3 INTEGER,
    task_user_4 INTEGER,
    task_user_5 INTEGER,
    FOREIGN KEY (task_user_1) REFERENCES users(user_id),
    FOREIGN KEY (task_user_2) REFERENCES users(user_id),
    FOREIGN KEY (task_user_3) REFERENCES users(user_id),
    FOREIGN KEY (task_user_4) REFERENCES users(user_id),
    FOREIGN KEY (task_user_5) REFERENCES users(user_id) 
)







INSERT INTO users(user_firstname, user_lastname, user_email, user_display_name, user_company, user_team, user_auth_id, user_role)
VALUES (
    'Josh',
    'ROEOJA',
    'jane@gmail.com',
    'jane',
    2,
    1,
    null,
    '{{5}, {4}}'
)




UPDATE users
SET user_role = '{{2}, {3}, {4}}'
WHERE user_id = 6




SELECT * FROM users WHERE user_role @> ARRAY[4]




SELECT *
from roles 
JOIN company 
ON company_id=role_company
join users
ON user_id = company_id
WHERE role_company=6





SELECT *
from company 
JOIN project 
ON project_id=company_id




SELECT *
from company 
JOIN users 
ON user_company=company_id
join roles
ON role_company = company_id
WHERE role_company=4

*/
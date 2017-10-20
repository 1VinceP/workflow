SELECT * FROM task
    JOIN project ON task.$1 = project.project_unique_key;
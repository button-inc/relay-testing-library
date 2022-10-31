-- Deploy todo_app:insert_todo to pg
-- requires: todos
-- requires: todo_appschema

BEGIN;

create or replace function todo_app.insert_todo(
    task text,
    completed boolean
) returns void language sql security definer as $$
    insert into todo_app.todos(task, completed) values($1, $2);
$$;

COMMIT;

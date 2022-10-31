-- Deploy todo_app:seed_todo to pg
-- requires: insert_todo
-- requires: todos
-- requires: todo_appschema

BEGIN;

select todo_app.insert_todo('task not done', false);
select todo_app.insert_todo('task done', true);

COMMIT;

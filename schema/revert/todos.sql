-- Revert todo_app:todos from pg

BEGIN;

drop table todo_app.todos;

COMMIT;

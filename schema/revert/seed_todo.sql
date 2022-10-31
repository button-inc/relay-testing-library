-- Revert todo_app:seed_todo from pg

BEGIN;

delete from todo_app.todos;

COMMIT;

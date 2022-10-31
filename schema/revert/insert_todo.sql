-- Revert todo_app:insert_todo from pg

BEGIN;

drop function todo_app.insert_todo(text, boolean);

COMMIT;

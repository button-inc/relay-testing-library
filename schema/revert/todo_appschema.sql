-- Revert todo_app:todo_appschema from pg

BEGIN;

drop schema todo_app;

COMMIT;

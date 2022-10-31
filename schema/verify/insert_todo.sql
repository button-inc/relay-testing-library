-- Verify todo_app:insert_todo on pg

BEGIN;

select has_function_privilege('todo_app.insert_todo(text, boolean)', 'execute');

ROLLBACK;

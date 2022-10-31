-- Verify todo_app:todos on pg

BEGIN;

select id, task, completed, date_created, date_updated
  FROM todo_app.todos
 WHERE FALSE;

ROLLBACK;

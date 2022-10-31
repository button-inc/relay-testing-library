-- Verify todo_app:seed_todo on pg


BEGIN;
do $$
declare
count integer;

BEGIN
count := (select count(id) from todo_app.todos);
assert count = 2;
end $$

ROLLBACK;

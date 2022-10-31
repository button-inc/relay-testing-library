-- Deploy todo_app:todos to pg
-- requires: todo_appschema

BEGIN;

set client_min_messages = 'warning';

create table todo_app.todos (
    id   integer primary key generated always as identity,
    task  text        not null,
    completed boolean   not null default false,
    date_created    timestamptz not null default now(),
    date_updated    timestamptz not null default now()
);

COMMIT;

# Onboarding Guide: Todo App

A guide to help developers onboard to the Button stack by building a simple todo app.

The goals are:

1. Create a [working todo app](#user-stories) in order to learn by discovery, decoupled from any project-specific context in which this stack may be used.

2. Make a series of **draft** pull requests against the main branch for the purposes of demonstration / archive and peer review.

Previous solutions by other developers are accessible in this repository's pull requests; viewer's discretion is advised 😉.

## Preparation

Ensure that:

1. [Postgres](https://www.postgresql.org/) is installed.
2. [Sqitch](https://sqitch.org/) is installed (requires a working Perl 5 installation).
3. [Node](https://nodejs.org/) is installed.
4. This repository has been cloned, or forked somewhere that you have push permissions and can share your solutions with your team.
5. For each step, you have checked out a new branch with your name as a prefix: `myname/this-step`
6. After completing a step, create a **draft** pull request with the previous step's branch as the base; these pull requests are not intended to be merged.
7. Request review from someone who can help.

## User Stories

As a user, I can:

- [ ] View all todos
- [ ] Mark existing todos as completed
- [ ] Add new todos to the list
- [ ] See the list in the same state between browser refreshes

<div align="center">
  <img src="./todo-demo.gif" style="max-width: 300px;" alt="Todo list demo"/>
</div>

## Step 1: Database

1. Ensure a Postgres service is running.
2. Create a new database for the purpose of this project.
3. Create a `schema/` folder for database things, and from there [initialize a new Sqitch project](https://sqitch.org/docs/manual/).
4. Use Sqitch to create a new schema, `todo_app` in the project database.

\* **Note**: Entities' dependencies (such as a table that depends on a schema) can be expressed to Sqitch at the time of creation using the `--requires` flag. These will show up n the `sqitch.plan` in square brackets next to the name of the created entity. Sqitch will ensure dependencies are deployed first.

5. Use Sqitch to create a table in this schema\* (see note) with the following attributes:

- `id`
- `task`
- `completed`
- `date_created`
- `date_updated`

**Pro tip**: Insert some seed data into this table for testing the next few steps.

## Step 2: Postgraphile API

[Postgraphile](https://www.graphile.org/postgraphile/) can generate a GraphQL API based on our Postgres database, so for the sake of simplicity for this project, there's no need to build a Node backend.

1. `npm init` to initialize a `package.json` for the project.
2. Install [Postgraphile](https://www.graphile.org/postgraphile/) and run it pointing at the project's database.
3. Open the Graphiql (a graphical UI for GraphQL queries) instance that should be live at `/graphiql` on localhost once Postgraphile is running.
4. Confirm that GraphQL is introspecting your Postgres schema by querying the todos you inserted in the previous step.

## Step 3: Front end

1. Use [Create React App](https://create-react-app.dev/) with Typescript to bootstrap the client:

`npx create-react-app client --template typescript`

2. Add [Relay](https://relay.dev/) to the client.

## Step 4: Build TodoList components

1. Build `TodoList` and `TodoListItem` components, each using a [Relay fragment](https://relay.dev/docs/guided-tour/rendering/fragments/) for data.
2. Ensure that data requirements for each component are specified using GraphQL. Using Graphiql can help you refine this.

## Step 5: Build CreateTodo component

Make a simple [mutation-based](https://relay.dev/docs/en/mutations) component for adding new todos to the list.

## Step 6: Write unit tests

Use [Jest](https://jestjs.io/) to test client side components.

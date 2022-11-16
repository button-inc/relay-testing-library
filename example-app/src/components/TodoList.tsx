import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import TodoListItem from './TodoListItem';
import { TodoList_query$key } from './__generated__/TodoList_query.graphql';
import CreateTodo from './CreateTodo';
import { useFragment } from 'react-relay/hooks';
// Type ctrl+space on the line that uses the thing you want to import and it will pop up here



type Props = {

    query: any
}

function TodoList({query}: Props) {

    const data = useFragment(
        // underscore matches prop name, convention in this project to use _query if its of type Query (type comes from postgraphile)
        graphql`
          fragment TodoList_query on Query {
            allTodos (first: 2147483647) @connection(key: "connection_allTodos") {
                __id
                edges {
                  node {
                      id
                    ...TodoListItem_todo
                  }
                }
              }
            }
        `,
        query,
      );

      const listItems = data.allTodos.edges.map(todo =>
        <TodoListItem
            key={todo.node.id}
            todo={todo.node}
        />
    )
    return (<div className="list">{listItems}
     <CreateTodo connectionId={data.allTodos.__id}/></div>
   )

}

export default TodoList;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import graphql from 'babel-plugin-relay/macro';
import TodoListItem from './TodoListItem';
import CreateTodo from './CreateTodo';
import { useFragment } from 'react-relay/hooks';
function TodoList({ query }) {
    const data = useFragment(
    // underscore matches prop name, convention in this project to use _query if its of type Query (type comes from postgraphile)
    graphql `
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
        `, query);
    const listItems = data.allTodos.edges.map(todo => _jsx(TodoListItem, { todo: todo.node }, todo.node.id));
    return (_jsxs("div", { className: "list", children: [listItems, _jsx(CreateTodo, { connectionId: data.allTodos.__id })] }));
}
export default TodoList;
//# sourceMappingURL=TodoList.js.map
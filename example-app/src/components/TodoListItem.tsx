import React from 'react';
import {graphql} from 'babel-plugin-relay/macro';
import { useFragment, commitMutation } from 'react-relay/hooks';
import type {TodoListItem_todo$key} from './__generated__/TodoListItem_todo.graphql';
import Checkbox from '@button-inc/component-library/Checkbox'
import RelayEnvironment from '../RelayEnvironment';

type Props = {
    //$key includes data and fragment reference
    todo: TodoListItem_todo$key
}

const UpdateTodoMutation = graphql`
mutation TodoListItemUpdateMutation (
  $input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    todoEdge {
      node {
        completed
      }
    }
  }
}
`;

function TodoListItem(props: Props) {
    const data = useFragment(
        graphql`
          fragment TodoListItem_todo on Todo {
            id
            task
            completed
          }
        `,
        props.todo,
      );

      const handleClick = e => {
        const change = e.target.checked;

        commitMutation(RelayEnvironment, {
          mutation: UpdateTodoMutation,
          variables: {input: {
            id: data.id,
            todoPatch: {
              completed: change
            }
          }},
          onCompleted: response => {
            console.log('completed, response is:',response)
          } /* Mutation completed */,
          onError: error => {
            console.log('error is:',error)
          } /* Mutation errored */,
        });

      }

      return (
          <Checkbox className={"checkbox"} label={data.task} defaultChecked={data.completed} onClick={handleClick}/>
      )
      

}

export default TodoListItem;

/**
 * @generated SignedSource<<16cda74c584af63a064e7db37ced8d55>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTodoInput = {
  clientMutationId?: string | null;
  id: string;
  todoPatch: TodoPatch;
};
export type TodoPatch = {
  completed?: boolean | null;
  dateCreated?: any | null;
  dateUpdated?: any | null;
  task?: string | null;
};
export type TodoListItemUpdateMutation$variables = {
  input: UpdateTodoInput;
};
export type TodoListItemUpdateMutation$data = {
  readonly updateTodo: {
    readonly todoEdge: {
      readonly node: {
        readonly completed: boolean;
      } | null;
    } | null;
  } | null;
};
export type TodoListItemUpdateMutation = {
  variables: TodoListItemUpdateMutation$variables;
  response: TodoListItemUpdateMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListItemUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateTodoPayload",
        "kind": "LinkedField",
        "name": "updateTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TodosEdge",
            "kind": "LinkedField",
            "name": "todoEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Todo",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListItemUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateTodoPayload",
        "kind": "LinkedField",
        "name": "updateTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TodosEdge",
            "kind": "LinkedField",
            "name": "todoEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Todo",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1822d81367fa449ea328e4b8e2b9f1b7",
    "id": null,
    "metadata": {},
    "name": "TodoListItemUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListItemUpdateMutation(\n  $input: UpdateTodoInput!\n) {\n  updateTodo(input: $input) {\n    todoEdge {\n      node {\n        completed\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "246fd4a06c088ed1cd95d7f771fe8083";

export default node;

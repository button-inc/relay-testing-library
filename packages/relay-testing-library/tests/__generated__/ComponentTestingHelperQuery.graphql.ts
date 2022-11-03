/**
 * @generated SignedSource<<436050014232276fd3e42c816f9bf867>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ComponentTestingHelperQuery$variables = {};
export type ComponentTestingHelperQuery$data = {
  readonly query: {
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_query">;
  };
};
export type ComponentTestingHelperQuery = {
  response: ComponentTestingHelperQuery$data;
  variables: ComponentTestingHelperQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Cursor"
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ComponentTestingHelperQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoList_query"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ComponentTestingHelperQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "TodosConnection",
            "kind": "LinkedField",
            "name": "allTodos",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TodosEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Todo",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "task",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "completed",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__id",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": "allTodos(first:2147483647)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "connection_allTodos",
            "kind": "LinkedHandle",
            "name": "allTodos"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "08810148624ca180ffa366d229eea4d0",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "query": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Query"
        },
        "query.allTodos": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TodosConnection"
        },
        "query.allTodos.edges": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "TodosEdge"
        },
        "query.allTodos.edges.cursor": (v2/*: any*/),
        "query.allTodos.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Todo"
        },
        "query.allTodos.edges.node.__typename": (v3/*: any*/),
        "query.allTodos.edges.node.completed": (v4/*: any*/),
        "query.allTodos.edges.node.id": (v5/*: any*/),
        "query.allTodos.edges.node.task": (v3/*: any*/),
        "query.allTodos.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "query.allTodos.pageInfo.endCursor": (v2/*: any*/),
        "query.allTodos.pageInfo.hasNextPage": (v4/*: any*/),
        "query.id": (v5/*: any*/)
      }
    },
    "name": "ComponentTestingHelperQuery",
    "operationKind": "query",
    "text": "query ComponentTestingHelperQuery {\n  query {\n    ...TodoList_query\n    id\n  }\n}\n\nfragment TodoListItem_todo on Todo {\n  id\n  task\n  completed\n}\n\nfragment TodoList_query on Query {\n  allTodos(first: 2147483647) {\n    edges {\n      node {\n        id\n        ...TodoListItem_todo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2c35a7b755bb983462cbb29b507cc37e";

export default node;

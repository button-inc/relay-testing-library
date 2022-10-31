/**
 * @generated SignedSource<<d678173400e3fad71d9a782e7634a004>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppAllTodosQuery$variables = {};
export type AppAllTodosQuery$data = {
  readonly query: {
    readonly allTodos: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly dateUpdated: any;
          readonly dateCreated: any;
          readonly completed: boolean;
          readonly task: string;
        } | null;
      }>;
    } | null;
  };
};
export type AppAllTodosQuery = {
  variables: AppAllTodosQuery$variables;
  response: AppAllTodosQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
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
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "dateUpdated",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "dateCreated",
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
              "name": "task",
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAllTodosQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          (v1/*: any*/)
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
    "name": "AppAllTodosQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4d4076da75058681b1bd37f2d91175cd",
    "id": null,
    "metadata": {},
    "name": "AppAllTodosQuery",
    "operationKind": "query",
    "text": "query AppAllTodosQuery {\n  query {\n    allTodos {\n      edges {\n        node {\n          id\n          dateUpdated\n          dateCreated\n          completed\n          task\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1b506467db531422c244727f871163a2";

export default node;

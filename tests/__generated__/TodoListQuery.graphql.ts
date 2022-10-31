/**
 * @generated SignedSource<<ddfea25a2e977d16d8b5493d35e4c26f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from "relay-runtime";
export type TodoListQuery$variables = {};
export type TodoListQuery$data = {
  readonly allTasks: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: number;
        readonly completed: boolean;
        readonly dateCreated: any;
        readonly dateUpdated: any;
        readonly task: string;
      } | null;
    }>;
  } | null;
};
export type TodoListQuery = {
  variables: TodoListQuery$variables;
  response: TodoListQuery$data;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        kind: "Literal",
        name: "orderBy",
        value: "NATURAL",
      },
    ],
    v1 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
    v2 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "completed",
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "dateCreated",
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "dateUpdated",
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "task",
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "TodoListQuery",
      selections: [
        {
          alias: null,
          args: v0 /*: any*/,
          concreteType: "TasksConnection",
          kind: "LinkedField",
          name: "allTasks",
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TasksEdge",
              kind: "LinkedField",
              name: "edges",
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Task",
                  kind: "LinkedField",
                  name: "node",
                  plural: false,
                  selections: [
                    v1 /*: any*/,
                    v2 /*: any*/,
                    v3 /*: any*/,
                    v4 /*: any*/,
                    v5 /*: any*/,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: 'allTasks(orderBy:"NATURAL")',
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "TodoListQuery",
      selections: [
        {
          alias: null,
          args: v0 /*: any*/,
          concreteType: "TasksConnection",
          kind: "LinkedField",
          name: "allTasks",
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TasksEdge",
              kind: "LinkedField",
              name: "edges",
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Task",
                  kind: "LinkedField",
                  name: "node",
                  plural: false,
                  selections: [
                    v1 /*: any*/,
                    v2 /*: any*/,
                    v3 /*: any*/,
                    v4 /*: any*/,
                    v5 /*: any*/,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "nodeId",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: 'allTasks(orderBy:"NATURAL")',
        },
      ],
    },
    params: {
      cacheID: "01a60777dd1531a43a97649eea119ee5",
      id: null,
      metadata: {},
      name: "TodoListQuery",
      operationKind: "query",
      text: "query TodoListQuery {\n  allTasks(orderBy: NATURAL) {\n    edges {\n      node {\n        id\n        completed\n        dateCreated\n        dateUpdated\n        task\n        nodeId\n      }\n    }\n  }\n}\n",
    },
  };
})();

(node as any).hash = "8cc34f6b86c6ac95db1a071550eee045";

export default node;

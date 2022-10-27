/**
 * @generated SignedSource<<23cf0d22142e9a095008fe7275874958>>
 * @lightSyntaxTransform
 * @nogrep
 */
const node = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "connections"
        },
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "input"
        }
    ], v1 = [
        {
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
        }
    ], v2 = {
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
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
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
    };
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "CreateTodoMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "CreateTodoPayload",
                    "kind": "LinkedField",
                    "name": "createTodo",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/)
                    ],
                    "storageKey": null
                }
            ],
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "CreateTodoMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "CreateTodoPayload",
                    "kind": "LinkedField",
                    "name": "createTodo",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "filters": null,
                            "handle": "appendEdge",
                            "key": "",
                            "kind": "LinkedHandle",
                            "name": "todoEdge",
                            "handleArgs": [
                                {
                                    "kind": "Variable",
                                    "name": "connections",
                                    "variableName": "connections"
                                }
                            ]
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "b63ffab651ff19fe7c8d1e18b4b354b6",
            "id": null,
            "metadata": {},
            "name": "CreateTodoMutation",
            "operationKind": "mutation",
            "text": "mutation CreateTodoMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    todoEdge {\n      node {\n        id\n        task\n      }\n    }\n  }\n}\n"
        }
    };
})();
node.hash = "0148d70f795b848655b7c5b5ec55cc23";
export default node;
//# sourceMappingURL=CreateTodoMutation.graphql.js.map
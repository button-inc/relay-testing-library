/**
 * @generated SignedSource<<b717a534f5a23e38f66a841c5dd04662>>
 * @lightSyntaxTransform
 * @nogrep
 */
const node = (function () {
    var v0 = [
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
        "kind": "ScalarField",
        "name": "completed",
        "storageKey": null
    };
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "TodoListItemUpdateMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
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
                                        (v2 /*: any*/)
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
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "TodoListItemUpdateMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
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
                                        (v2 /*: any*/),
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
node.hash = "246fd4a06c088ed1cd95d7f771fe8083";
export default node;
//# sourceMappingURL=TodoListItemUpdateMutation.graphql.js.map
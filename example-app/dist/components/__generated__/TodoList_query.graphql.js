/**
 * @generated SignedSource<<f659fa1c357abb7fa2a0256992352d5d>>
 * @lightSyntaxTransform
 * @nogrep
 */
const node = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
        "connection": [
            {
                "count": null,
                "cursor": null,
                "direction": "forward",
                "path": [
                    "allTodos"
                ]
            }
        ]
    },
    "name": "TodoList_query",
    "selections": [
        {
            "alias": "allTodos",
            "args": null,
            "concreteType": "TodosConnection",
            "kind": "LinkedField",
            "name": "__connection_allTodos_connection",
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
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "id",
                                    "storageKey": null
                                },
                                {
                                    "args": null,
                                    "kind": "FragmentSpread",
                                    "name": "TodoListItem_todo"
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
            "storageKey": null
        }
    ],
    "type": "Query",
    "abstractKey": null
};
node.hash = "ea20991aeb96cf04c4064cc5971395a0";
export default node;
//# sourceMappingURL=TodoList_query.graphql.js.map
/**
 * @generated SignedSource<<64c59860b485443ee6b9da93c3a76d44>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoListItem_todo$data = {
  readonly completed: boolean;
  readonly id: string;
  readonly task: string;
  readonly " $fragmentType": "TodoListItem_todo";
};
export type TodoListItem_todo$key = {
  readonly " $data"?: TodoListItem_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoListItem_todo">;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: "Fragment",
  metadata: null,
  name: "TodoListItem_todo",
  selections: [
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "task",
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "completed",
      storageKey: null,
    },
  ],
  type: "Todo",
  abstractKey: null,
};

(node as any).hash = "649142436e96597e1d111012c4994da6";

export default node;

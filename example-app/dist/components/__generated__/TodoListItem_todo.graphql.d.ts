/**
 * @generated SignedSource<<64c59860b485443ee6b9da93c3a76d44>>
 * @lightSyntaxTransform
 * @nogrep
 */
import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export declare type TodoListItem_todo$data = {
    readonly completed: boolean;
    readonly id: string;
    readonly task: string;
    readonly " $fragmentType": "TodoListItem_todo";
};
export declare type TodoListItem_todo$key = {
    readonly " $data"?: TodoListItem_todo$data;
    readonly " $fragmentSpreads": FragmentRefs<"TodoListItem_todo">;
};
declare const node: ReaderFragment;
export default node;

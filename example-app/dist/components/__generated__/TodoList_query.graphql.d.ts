/**
 * @generated SignedSource<<f659fa1c357abb7fa2a0256992352d5d>>
 * @lightSyntaxTransform
 * @nogrep
 */
import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export declare type TodoList_query$data = {
    readonly allTodos: {
        readonly __id: string;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentSpreads": FragmentRefs<"TodoListItem_todo">;
            } | null;
        }>;
    } | null;
    readonly " $fragmentType": "TodoList_query";
};
export declare type TodoList_query$key = {
    readonly " $data"?: TodoList_query$data;
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_query">;
};
declare const node: ReaderFragment;
export default node;

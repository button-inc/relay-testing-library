/**
 * @generated SignedSource<<b717a534f5a23e38f66a841c5dd04662>>
 * @lightSyntaxTransform
 * @nogrep
 */
import { ConcreteRequest } from 'relay-runtime';
export declare type UpdateTodoInput = {
    clientMutationId?: string | null;
    id: string;
    todoPatch: TodoPatch;
};
export declare type TodoPatch = {
    completed?: boolean | null;
    dateCreated?: any | null;
    dateUpdated?: any | null;
    task?: string | null;
};
export declare type TodoListItemUpdateMutation$variables = {
    input: UpdateTodoInput;
};
export declare type TodoListItemUpdateMutation$data = {
    readonly updateTodo: {
        readonly todoEdge: {
            readonly node: {
                readonly completed: boolean;
            } | null;
        } | null;
    } | null;
};
export declare type TodoListItemUpdateMutation = {
    response: TodoListItemUpdateMutation$data;
    variables: TodoListItemUpdateMutation$variables;
};
declare const node: ConcreteRequest;
export default node;

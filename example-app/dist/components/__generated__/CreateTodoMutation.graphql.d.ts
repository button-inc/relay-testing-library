/**
 * @generated SignedSource<<23cf0d22142e9a095008fe7275874958>>
 * @lightSyntaxTransform
 * @nogrep
 */
import { ConcreteRequest } from 'relay-runtime';
export declare type CreateTodoInput = {
    clientMutationId?: string | null;
    todo: TodoInput;
};
export declare type TodoInput = {
    completed?: boolean | null;
    dateCreated?: any | null;
    dateUpdated?: any | null;
    task: string;
};
export declare type CreateTodoMutation$variables = {
    connections: ReadonlyArray<string>;
    input: CreateTodoInput;
};
export declare type CreateTodoMutation$data = {
    readonly createTodo: {
        readonly todoEdge: {
            readonly node: {
                readonly id: string;
                readonly task: string;
            } | null;
        } | null;
    } | null;
};
export declare type CreateTodoMutation = {
    response: CreateTodoMutation$data;
    variables: CreateTodoMutation$variables;
};
declare const node: ConcreteRequest;
export default node;

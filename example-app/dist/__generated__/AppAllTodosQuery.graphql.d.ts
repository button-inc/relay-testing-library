/**
 * @generated SignedSource<<d678173400e3fad71d9a782e7634a004>>
 * @lightSyntaxTransform
 * @nogrep
 */
import { ConcreteRequest } from 'relay-runtime';
export declare type AppAllTodosQuery$variables = {};
export declare type AppAllTodosQuery$data = {
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
export declare type AppAllTodosQuery = {
    variables: AppAllTodosQuery$variables;
    response: AppAllTodosQuery$data;
};
declare const node: ConcreteRequest;
export default node;

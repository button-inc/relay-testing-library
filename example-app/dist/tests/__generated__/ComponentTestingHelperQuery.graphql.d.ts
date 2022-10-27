/**
 * @generated SignedSource<<436050014232276fd3e42c816f9bf867>>
 * @lightSyntaxTransform
 * @nogrep
 */
import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export declare type ComponentTestingHelperQuery$variables = {};
export declare type ComponentTestingHelperQuery$data = {
    readonly query: {
        readonly " $fragmentSpreads": FragmentRefs<"TodoList_query">;
    };
};
export declare type ComponentTestingHelperQuery = {
    response: ComponentTestingHelperQuery$data;
    variables: ComponentTestingHelperQuery$variables;
};
declare const node: ConcreteRequest;
export default node;

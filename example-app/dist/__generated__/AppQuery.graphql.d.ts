/**
 * @generated SignedSource<<19b6985f66d5a822bb36777ca5c682c5>>
 * @lightSyntaxTransform
 * @nogrep
 */
import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export declare type AppQuery$variables = {};
export declare type AppQuery$data = {
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_query">;
};
export declare type AppQuery = {
    response: AppQuery$data;
    variables: AppQuery$variables;
};
declare const node: ConcreteRequest;
export default node;

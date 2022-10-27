/// <reference types="react" />
import { ConcreteRequest, GraphQLTaggedNode, OperationType } from "relay-runtime";
import { MockResolvers } from "relay-test-utils/lib/RelayMockPayloadGenerator";
import { RelayMockEnvironment } from "relay-test-utils";
interface ComponentTestingHelperOptions<TQuery extends OperationType> {
    component: (props: any) => JSX.Element;
    testQuery: GraphQLTaggedNode;
    compiledQuery: ConcreteRequest;
    getPropsFromTestQuery?: (data: TQuery["response"]) => any;
    defaultQueryResolver?: MockResolvers;
    defaultQueryVariables?: TQuery["variables"];
    defaultComponentProps?: any;
}
declare class ComponentTestingHelper<TQuery extends OperationType> {
    private options;
    environment: RelayMockEnvironment;
    reinit(): void;
    expectMutationToBeCalled(mutationName: string, variables?: any): void;
    renderResult: any;
    constructor(options: ComponentTestingHelperOptions<TQuery>);
    loadQuery(queryResolver?: MockResolvers): void;
    private TestRenderer;
    renderComponent(getPropsFromTestQuery?: (data: TQuery["response"]) => any, extraProps?: any): any;
    rerenderComponent(getPropsFromTestQuery?: (data: TQuery["response"]) => any, extraProps?: any): any;
}
export default ComponentTestingHelper;

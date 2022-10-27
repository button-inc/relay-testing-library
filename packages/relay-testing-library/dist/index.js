import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import { MockPayloadGenerator } from "relay-test-utils";
import { RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay";
import { createMockEnvironment } from "relay-test-utils";
class ComponentTestingHelper {
    options;
    environment;
    reinit() {
        this.environment = createMockEnvironment();
    }
    expectMutationToBeCalled(mutationName, variables) {
        try {
            // eslint-disable-next-line jest/no-standalone-expect
            expect(this.environment.mock.getAllOperations()).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    fragment: expect.objectContaining({
                        node: expect.objectContaining({
                            type: "Mutation",
                            name: mutationName,
                        }),
                    }),
                    request: expect.objectContaining({
                        variables,
                    }),
                }),
            ]));
        }
        catch (e) {
            const allMutations = this.environment.mock
                .getAllOperations()
                .filter((op) => op?.fragment?.node?.type === "Mutation");
            const matchingReceivedMutations = allMutations.filter((op) => op.fragment.node.name === mutationName);
            if (matchingReceivedMutations.length === 0) {
                throw new Error(`Expected mutation ${mutationName} to be called. Mutations called:\n` +
                    `${allMutations.map((op) => op.fragment.node.name).join(", ")}`);
            }
            else
                throw new Error(`Expected mutation ${mutationName} to be called with:\n` +
                    `${JSON.stringify(variables, null, 2)}\n` +
                    `received:` +
                    `${matchingReceivedMutations.map((op) => `\n${JSON.stringify(op.request.variables, null, 2)}`)}`);
        }
    }
    renderResult;
    constructor(options) {
        this.options = {
            getPropsFromTestQuery: () => ({}),
            defaultQueryResolver: {},
            defaultQueryVariables: {},
            defaultComponentProps: {},
            ...options,
        };
        this.reinit();
    }
    loadQuery(queryResolver) {
        this.environment.mock.queueOperationResolver((operation) => {
            return MockPayloadGenerator.generate(operation, queryResolver ?? this.options.defaultQueryResolver);
        });
        this.environment.mock.queuePendingOperation(this.options.compiledQuery, this.options.defaultQueryVariables);
    }
    TestRenderer = ({ getPropsFromTestQuery, extraProps }) => {
        // This is fine since this is a react functional component
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const data = useLazyLoadQuery(this.options.testQuery, this.options.defaultQueryVariables);
        const Component = this.options.component;
        return _jsx(Component, { ...getPropsFromTestQuery(data), ...extraProps });
    };
    renderComponent(getPropsFromTestQuery = this.options
        .getPropsFromTestQuery, extraProps = this.options.defaultComponentProps) {
        this.renderResult = render(_jsx(RelayEnvironmentProvider, { environment: this.environment, children: _jsx(this.TestRenderer, { getPropsFromTestQuery: getPropsFromTestQuery, extraProps: extraProps }) }));
        return this.renderResult;
    }
    rerenderComponent(getPropsFromTestQuery = this.options
        .getPropsFromTestQuery, extraProps = this.options.defaultComponentProps) {
        this.renderResult.rerender(_jsx(RelayEnvironmentProvider, { environment: this.environment, children: _jsx(this.TestRenderer, { getPropsFromTestQuery: getPropsFromTestQuery, extraProps: extraProps }) }));
        return this.renderResult;
    }
}
export default ComponentTestingHelper;
//# sourceMappingURL=index.js.map
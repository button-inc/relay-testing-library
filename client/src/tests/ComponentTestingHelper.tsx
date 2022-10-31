import React from "react";
import { render } from "@testing-library/react";
import { MockPayloadGenerator } from "relay-test-utils";
import { RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay";
import {
  ConcreteRequest,
  GraphQLTaggedNode,
  OperationType,
} from "relay-runtime";
import { MockResolvers } from "relay-test-utils/lib/RelayMockPayloadGenerator";
import { createMockEnvironment, RelayMockEnvironment } from "relay-test-utils";

interface ComponentTestingHelperOptions<TQuery extends OperationType> {
  component: (props: any) => JSX.Element;
  testQuery: GraphQLTaggedNode;
  compiledQuery: ConcreteRequest;
  getPropsFromTestQuery?: (data: TQuery["response"]) => any;
  defaultQueryResolver?: MockResolvers;
  defaultQueryVariables?: TQuery["variables"];
  defaultComponentProps?: any;
}

class ComponentTestingHelper<TQuery extends OperationType> {
  private options: ComponentTestingHelperOptions<TQuery>;

  public environment: RelayMockEnvironment;

  public reinit() {
    this.environment = createMockEnvironment();
  }

  public expectMutationToBeCalled(mutationName: string, variables?: any) {
    try {
      // eslint-disable-next-line jest/no-standalone-expect
      expect(this.environment.mock.getAllOperations()).toEqual(
        expect.arrayContaining([
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
        ])
      );
    } catch (e) {
      const allMutations = this.environment.mock
        .getAllOperations()
        .filter((op) => op?.fragment?.node?.type === "Mutation");

      const matchingReceivedMutations = allMutations.filter(
        (op) => op.fragment.node.name === mutationName
      );

      if (matchingReceivedMutations.length === 0) {
        throw new Error(
          `Expected mutation ${mutationName} to be called. Mutations called:\n` +
            `${allMutations.map((op) => op.fragment.node.name).join(", ")}`
        );
      } else
        throw new Error(
          `Expected mutation ${mutationName} to be called with:\n` +
            `${JSON.stringify(variables, null, 2)}\n` +
            `received:` +
            `${matchingReceivedMutations.map(
              (op) => `\n${JSON.stringify(op.request.variables, null, 2)}`
            )}`
        );
    }
  }

  public renderResult;

  constructor(options: ComponentTestingHelperOptions<TQuery>) {
    this.options = {
      getPropsFromTestQuery: () => ({}),
      defaultQueryResolver: {},
      defaultQueryVariables: {},
      defaultComponentProps: {},
      ...options,
    };

    this.reinit();
  }

  public loadQuery(queryResolver?: MockResolvers) {
    this.environment.mock.queueOperationResolver((operation) => {
      return MockPayloadGenerator.generate(
        operation,
        queryResolver ?? this.options.defaultQueryResolver
      );
    });

    this.environment.mock.queuePendingOperation(
      this.options.compiledQuery,
      this.options.defaultQueryVariables
    );
  }

  private TestRenderer: React.FC<{
    getPropsFromTestQuery: (data: TQuery["response"]) => any;
    extraProps: any;
  }> = ({ getPropsFromTestQuery, extraProps }) => {
    // This is fine since this is a react functional component
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data: TQuery["response"] = useLazyLoadQuery<TQuery>(
      this.options.testQuery,
      this.options.defaultQueryVariables
    );
    const Component = this.options.component;
    return <Component {...getPropsFromTestQuery(data)} {...extraProps} />;
  };

  public renderComponent(
    getPropsFromTestQuery: (data: TQuery["response"]) => any = this.options
      .getPropsFromTestQuery,
    extraProps: any = this.options.defaultComponentProps
  ) {
    this.renderResult = render(
      <RelayEnvironmentProvider environment={this.environment}>
        <this.TestRenderer
          getPropsFromTestQuery={getPropsFromTestQuery}
          extraProps={extraProps}
        />
      </RelayEnvironmentProvider>
    );
    return this.renderResult;
  }

  public rerenderComponent(
    getPropsFromTestQuery: (data: TQuery["response"]) => any = this.options
      .getPropsFromTestQuery,
    extraProps: any = this.options.defaultComponentProps
  ) {
    this.renderResult.rerender(
      <RelayEnvironmentProvider environment={this.environment}>
        <this.TestRenderer
          getPropsFromTestQuery={getPropsFromTestQuery}
          extraProps={extraProps}
        />
      </RelayEnvironmentProvider>
    );
    return this.renderResult;
  }
}

export default ComponentTestingHelper;

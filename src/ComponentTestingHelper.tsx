// remove errorcontextprovider and router (cause it's in next
// next stuff in a separate package, thi pakage is about relay
// only do component testing helper, combine with testing helper
// v1.1 give component testing helper an array of context providers and their initial value, work as a generic solution
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
import TestingHelper from "./TestingHelper";

interface ComponentTestingHelperOptions<TQuery extends OperationType> {
  component: (props: any) => JSX.Element;
  testQuery: GraphQLTaggedNode;
  compiledQuery: ConcreteRequest;
  getPropsFromTestQuery?: (data: TQuery["response"]) => any;
  defaultQueryResolver?: MockResolvers;
  defaultQueryVariables?: TQuery["variables"];
  defaultComponentProps?: any;
}

class ComponentTestingHelper<
  TQuery extends OperationType
> extends TestingHelper {
  private options: ComponentTestingHelperOptions<TQuery>;

  public renderResult;

  constructor(options: ComponentTestingHelperOptions<TQuery>) {
    super();
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
    console.log("this", this.options.component);
    return (
      <this.options.component
        {...getPropsFromTestQuery(data)} // do we even need getPropsFromTestQuery? too CIF-specific?
        {...extraProps}
      />
    );
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

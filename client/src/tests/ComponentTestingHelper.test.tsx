/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import ComponentTestingHelper from "./ComponentTestingHelper";
import { graphql } from "react-relay";
import compiledTodoListQuery, {
  ComponentTestingHelperQuery,
} from "./__generated__/ComponentTestingHelperQuery.graphql";
import TodoList from "../components/TodoList";
import { act, screen, render } from "@testing-library/react";

const testQuery = graphql`
  query ComponentTestingHelperQuery @relay_test_operation {
    query {
      # Spread the fragment you want to test here
      ...TodoList_query
    }
  }
`;

// This needs to match what we queried in our test query
// fix brianna
const mockQueryPayload = {
  ComponentTestingHelperQuery() {
    return {
      allTodos: {
        edges: [
          {
            node: {
              id: "1",
              task: "test operator",
              completed: true,
            },
          },
        ],
      },
    };
  },
};

const defaultComponentProps = {
  onSubmit: jest.fn(),
};

describe("ComponentTestingHelper", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("initializes the component testing helper", () => {
    const componentTestingHelper =
      new ComponentTestingHelper<ComponentTestingHelperQuery>({
        component: TodoList,
        testQuery: testQuery,
        compiledQuery: compiledTodoListQuery,
        getPropsFromTestQuery: (data) => ({
          query: data.query,
        }),
        defaultQueryResolver: mockQueryPayload,
        defaultQueryVariables: {},
        defaultComponentProps: defaultComponentProps,
      });
    expect(componentTestingHelper.environment).toEqual(expect.anything());
    expect(componentTestingHelper.expectMutationToBeCalled).toBeInstanceOf(
      Function
    );
    expect(componentTestingHelper.reinit).toEqual(expect.any(Function));
    expect(componentTestingHelper.loadQuery).toEqual(expect.any(Function));
    expect(componentTestingHelper.rerenderComponent).toEqual(
      expect.any(Function)
    );
  });

  it("loads the query", () => {
    const componentTestingHelper =
      new ComponentTestingHelper<ComponentTestingHelperQuery>({
        component: TodoList,
        testQuery: testQuery,
        compiledQuery: compiledTodoListQuery,
        getPropsFromTestQuery: (data) => ({
          query: data.query,
        }),
        defaultQueryResolver: mockQueryPayload,
        defaultQueryVariables: {},
        defaultComponentProps: defaultComponentProps,
      });
    console.log("before", componentTestingHelper.environment);
    componentTestingHelper.loadQuery();
    console.log("after", componentTestingHelper.environment);
  });

  it("loads renders the page", () => {
    const componentTestingHelper =
      new ComponentTestingHelper<ComponentTestingHelperQuery>({
        component: TodoList,
        testQuery: testQuery,
        compiledQuery: compiledTodoListQuery,
        getPropsFromTestQuery: (data) => ({
          query: data.query,
        }),
        defaultQueryResolver: mockQueryPayload,
        defaultQueryVariables: {},
        defaultComponentProps: defaultComponentProps,
      });
    componentTestingHelper.loadQuery();
    componentTestingHelper.renderComponent();
    expect(screen.getByText("zzzzz")).toBeInTheDocument();
    expect(screen.getByText("To-do App")).toBeInTheDocument();
  });
});

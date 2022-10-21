/**
 * @jest-environment jsdom
 */

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
const mockQueryPayload = {
  ComponentTestingHelperQuery() {
    const result: any = {
      allTodos: {
        edges: {
          node: {
            id: "1",
            node: {
              id: "1",
              task: "eat cake",
              completed: true,
            },
          },
        },
      },
    };
    return result;
  },
};

const defaultComponentProps = {
  onSubmit: jest.fn(),
};

describe("TestingHelper", () => {
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
          query: data,
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
});

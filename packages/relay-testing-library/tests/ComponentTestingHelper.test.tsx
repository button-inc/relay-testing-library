/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { commitMutation, graphql } from "react-relay";
import TodoList from "./components/TodoList";
import CreateTodoMutation from "./__generated__/CreateTodoMutation.graphql";
import ComponentTestingHelper from "../src/index";
import compiledComponentTestingHelperQuery, {
  ComponentTestingHelperQuery,
} from "./__generated__/ComponentTestingHelperQuery.graphql";

const testQuery = graphql`
  query ComponentTestingHelperQuery @relay_test_operation {
    query {
      # Spread the fragment you want to test here
      ...TodoList_query
    }
  }
`;

const mockQueryPayload = {
  Query() {
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

const componentTestingHelper =
  new ComponentTestingHelper<ComponentTestingHelperQuery>({
    component: TodoList,
    testQuery: testQuery,
    compiledQuery: compiledComponentTestingHelperQuery,
    getPropsFromTestQuery: (data) => ({
      query: data.query,
    }),
    defaultQueryResolver: mockQueryPayload,
    defaultQueryVariables: {},
    defaultComponentProps: defaultComponentProps,
  });

describe("ComponentTestingHelper", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    componentTestingHelper.reinit();
  });

  it("initializes the component testing helper", () => {
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
    componentTestingHelper.loadQuery();
    expect(
      componentTestingHelper.environment.mock.getAllOperations()[0].root.node
        .name
    ).toEqual("ComponentTestingHelperQuery");
  });

  it("renders the component", () => {
    componentTestingHelper.loadQuery();
    componentTestingHelper.renderComponent();
    expect(screen.getByLabelText("test operator")).toBeInTheDocument();
  });

  it("expectMutationToBeCalled function returns a message when the expected mutation is not called", () => {
    commitMutation(componentTestingHelper.environment, {
      mutation: CreateTodoMutation,
      variables: {},
    });

    expect(() => {
      componentTestingHelper.expectMutationToBeCalled("testMutation", {});
    }).toThrow(
      `Expected mutation testMutation to be called. Mutations called:\n` +
        `CreateTodoMutation`
    );
  });

  it("expectMutationToBeCalled function returns a message when the expected variables are not returned", () => {
    commitMutation(componentTestingHelper.environment, {
      mutation: CreateTodoMutation,
      variables: { connections: "test", input: "test" },
    });

    expect(() => {
      componentTestingHelper.expectMutationToBeCalled("CreateTodoMutation", {
        test: "iwillfail",
      });
    }).toThrow(
      `Expected mutation CreateTodoMutation to be called with:` +
        `
{
  "test": "iwillfail"
}` +
        `
received:
` +
        `{
  "connections": "test",
  "input": "test"
}`
    );
  });
});

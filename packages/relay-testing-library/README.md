## Relay Component Testing Helper

### Features

The `ComponentTestingHelper` class provides the following:

- `environment` - the test relay environment to assert or configure the query generator
- `loadQuery(optional_resolver_override)` - preloads the Relay query for rendering
- `renderComponent()` renders the component with the react testing library - accessible through `screen`
- `expectMutationToBeCalled(mutation_name, variables_mutation_should_be_called with)` - checks if the expected mutation was called; optionally checks if it was called with the correct variables
- `rerenderComponent` - ??

### How-to

1. Create a jest test file called `Component.test.tsx`

1. In `Component.test.tsx`, import the Component Testing Helper:

`import ComponentTestingHelper from "@button-inc/relay-testing-helper";`

1. In `Component.test.tsx`, import the component and mutation(s) you want to test:

```typescript
import Component from "path_to_component";
import Mutation from "path_to_mutation";
```

1. In `Component.test.tsx`, create a `testQuery`.

```typescript
const testQuery = graphql`
  # Add 'Test' before 'Query'
  query ComponentTestQuery @relay_test_operation {
    query {
      # Spread the fragment you want to test here
      ...Component_query
    }
  }
`;
```

1. Run your relay compiler to create the `ComponentTestQuery`

1. In `Component.test.tsx`, import

### Example
Check out `example-app/src/tests/ComponentTestingHelper.test.tsx` for an example of the testing helper in use with an example Todo app

Before running the example test
`cd example-app`
`yarn install`
`yarn relay`
`yarn test`


```typescript
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { commitMutation, graphql } from "react-relay";
import TodoList from "../components/TodoList";
import CreateTodoMutation from "../components/__generated__/CreateTodoMutation.graphql";
import ComponentTestingHelper from "@button-inc/relay-testing-library";
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
    // reinit the helper before each test
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
    expect(screen.getByText("test operator")).toBeInTheDocument();
  });
})
```

## Relay Component Testing Helper

### Features

The `ComponentTestingHelper` class provides the following:

- `environment` - the test relay environment to assert or configure the query generator
- `loadQuery(optional_resolver_override)` - preloads the Relay query for rendering
- `renderComponent()` renders the component with the react testing library - accessible through `screen`
- `expectMutationToBeCalled(mutation_name, variables_mutation_should_be_called with)` - checks if the expected mutation was called; optionally checks if it was called with the correct variables
- `rerenderComponent` - rerenders the component

### How-to

Where `Component` is the name of the component under test:

1. Create a jest test file called `Component.test.tsx`. All of the following instructions should be done in this file above the `describe` block unless indicated otherwise.

2. In `Component.test.tsx`, import the Component Testing Helper:

`import ComponentTestingHelper from "@button-inc/relay-testing-helper";`

3. In `Component.test.tsx`, import the component and mutation(s) you want to test:

```typescript
import Component from "path_to_component";
import Mutation from "path_to_mutation";
```

4. In `Component.test.tsx`, create a `testQuery`.

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

5. Run your relay compiler to create the `ComponentTestQuery`

6. Import the compiled query (default export) and `ComponentTestQuery` from `./**generated**/ComponentTestingHelperQuery.graphql`:

```typescript
import compiledComponentTestQuery, {
  ComponentTestQuery,
} from "./**generated**/ComponentTestQuery.graphql";
```

7. Create a `mockQueryPayload` to mock some data to be passed to the component you want to test. It needs to match the schema of the `testQuery`. For example:

```typescript
// This needs to match what we queried in our test query
const mockQueryPayload = {
  Query() {
    return {
      allItems: {
        edges: [
          {
            node: {
              id: "1",
              description: "this is a test",
            },
          },
        ],
      },
    };
  },
};
```

8. If desired, create `defaultQueryVariables` for the component that is being tested. For example:

```typescript
const defaultQueryVariables = { id: "mock-id" };
```

9. If desired, create `defaultComponentProps` for the component that is being tested. For example:

```typescript
const defaultComponentProps = {
  onSubmit: jest.fn(),
};
```

10. Instantiate the `componentTestingHelper`:

```typescript
const componentTestingHelper = new ComponentTestingHelper<ComponentTestQuery>({
  component: Component,
  testQuery: testQuery,
  compiledQuery: compiledComponentQuery,
  getPropsFromTestQuery: (data) => ({
    // This is how to build the props for the component we're testing, based on our test query
    query: data.query,
  }),
  defaultQueryResolver: mockQueryPayload,
  defaultQueryVariables: defaultQueryVariables || {},
  // Additional default props for the component
  defaultComponentProps: defaultComponentProps,
});
```

11. Create the test suite, ensuring to call `reinit` on the `componentTestingHelper` in the `beforeEach` block:

```typescript
describe("the test suite", () => {
  beforeEach(() => {
    // reinit the helper before each test
    componentTestingHelper.reinit();
  });
  it(...){
    componentTestingHelper.loadQuery() // or if you need a different mock query than the default, componentTestingHelper.loadQuery(different_mock_query)
    componentTestingHelper.renderComponent() // or if you need extra props for a particular test: componentTestingHelper.renderComponent(undefined, {...defaultComponentProps, extraProps })
  }
})
```

### Example

Check out `example-app/src/tests/ComponentTestingHelper.test.tsx` for an example of the testing helper in use with an example Todo app

It is not necessary but you can run the example todo app using the instructions [here](./example-app/README.md)

Before running the example test
`cd example-app` go into the example-app directory
`yarn install` install the necessary dependencies
`yarn relay` compile relay
`yarn test` run the jest test suite

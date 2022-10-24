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

`import ComponentTestingHelper from "@??";`

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

1. In `Component.test.tsx`, import the ComponentTestingHelperQuery.graphql from "./__generated__/ComponentTestingHelperQuery.graphql"

1. In `Component.test.tsx`, create a `mockQueryPayload` to mock some data to be passed to the component you want to test. It needs to match the
schema of the testQuery

```typescript
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

1. Create `defaultComponentProps` for the Component that is being tested

```typescript
const defaultComponentProps = {
  onSubmit: jest.fn(),
};
```

1. Instantiate the `componentTestingHelper`
```typescript
const componentTestingHelper =
  new ComponentTestingHelper<ComponentTestingHelperQuery>({
    component: Component,
    testQuery: testQuery,
    compiledQuery: compiledComponentQuery,  // where does this compiled query come from ? 
    getPropsFromTestQuery: (data) => ({
      query: data.query,
    }),
    defaultQueryResolver: mockQueryPayload,
    defaultQueryVariables: {},
    defaultComponentProps: defaultComponentProps,
  });
```

1. Create the test suite, ensuring to call reinit on the componentTestingHelper in the beforeEach block
```typescript 
describe("the test suite", () => {
  beforeEach(() => {
    // reinit the helper before each test
    componentTestingHelper.reinit();
  });
  it(...){
    componentTestingHelper.loadQuery()
    componentTestingHelper.renderComponent() // or if you need extra props for a particular test: componentTestingHelper.renderComponent(undefined, {...defaultComponentProps, extraProps })

    ... same testing as with the page helper ...
  }
})
```



// ----------------------------------------------------------------------------------------------------------------------------------------
### Example

```typescript
import ProjectContactForm from "components/Form/ProjectContactForm";
import compiledProjectContactFormQuery, {
  ProjectContactFormQuery,
} from "__generated__/ProjectContactFormQuery.graphql";

import ComponentTestingHelper from "@TBD";
import ComponentUnderTest from "path_to_component";
import MutationUnderTest from "path_to_mutation";
import compiledComponetUnderTestQuery, {
  ComponentTestingHelperQuery,
} from "./__generated__/ComponentTestingHelperQuery.graphql";

// The query mimics a page that contains that component,
// we craft a test query that uses the fragments of the component we're testing.
const testQuery = graphql`
  query ProjectContactFormQuery @relay_test_operation {
    query {
      # Spread the fragment you want to test here
      ...ProjectContactForm_query
      projectRevision(id: "Test Project Revision ID") {
        ...ProjectContactForm_projectRevision
      }
    }
  }
`;

// This needs to match what we queried in our test query
const mockQueryPayload = {
  Query() {
    const result: ProjectContactForm_projectRevision = {
      " $fragmentType": "ProjectContactForm_projectRevision",
      id: "Test Project Revision ID",
      rowId: 1234,
      ... etc ...
    };
    return result;
  },
  Query() {
    ...
  }
}

const defaultComponentProps = {
  setValidatingForm: jest.fn(),
  onSubmit: jest.fn(),
  ... etc ...
};

const componentTestingHelper =
  new ComponentTestingHelper<ProjectContactFormQuery>({
    component: ProjectContactForm,
    testQuery: testQuery,
    compiledQuery: compiledProjectContactFormQuery,
    getPropsFromTestQuery: (data) => ({
      // This is how to build the props for the component we're testing, based on our test query
      query: data.query,
      projectRevision: data.query.projectRevision,
    }),
    defaultQueryResolver: mockQueryPayload,
    defaultQueryVariables: {},
    // Additional default props for the component
    defaultComponentProps: defaultComponentProps,
  });

describe("the test suite", () => {
  beforeEach(() => {
    // reinit the helper before each test
    componentTestingHelper.reinit();
  });
  it(...){
    componentTestingHelper.loadQuery()
    componentTestingHelper.renderComponent() // or if you need extra props for a particular test: componentTestingHelper.renderComponent(undefined, {...defaultComponentProps, extraProps })

    ... same testing as with the page helper ...
  }
})

```

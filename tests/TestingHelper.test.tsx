import TestingHelper from "../src/TestingHelper";
import { commitMutation, graphql } from "react-relay";
import {
  createMockEnvironment,
  MockPayloadGenerator,
  RelayMockEnvironment,
} from "relay-test-utils";
import ReactTestRenderer from "react-test-renderer";
import CreateTodoMutation from "../client/src/components/__generated__/CreateTodoMutation.graphql";

describe("TestingHelper", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("reinit function creates an environment, errorContext, and mock router", () => {
    const testingHelper = new TestingHelper();
    testingHelper.reinit();
    expect(testingHelper.environment).toEqual(expect.anything());
    expect(testingHelper.errorContext.error).toBe(null);
    expect(testingHelper.errorContext.setError).toEqual(expect.any(Function));
    expect(testingHelper.expectMutationToBeCalled).toEqual(
      expect.any(Function)
    );
    expect(testingHelper.reinit).toEqual(expect.any(Function));
    expect(testingHelper.router).toEqual(expect.any(Object));
    expect(testingHelper.setMockRouterValues).toEqual(expect.any(Function));
  });

  it("setMockRouterValues function creates a mock router with the desired values", () => {
    const testingHelper = new TestingHelper();

    testingHelper.setMockRouterValues({
      pathname: "test-pathname",
      route: "test-route",
      query: { testkey: "testvalue" },
    });
    expect(testingHelper.router).toEqual(
      expect.objectContaining({
        pathname: "test-pathname",
        route: "test-route",
        query: { testkey: "testvalue" },
      })
    );
  });

  it("expectMutationToBeCalled function returns a message when the expected mutation is not called", () => {
    const testingHelper = new TestingHelper();
    testingHelper.reinit();

    commitMutation(testingHelper.environment, {
      mutation: CreateTodoMutation,
      variables: {},
    });

    expect(() => {
      testingHelper.expectMutationToBeCalled("testMutation", {});
    }).toThrow(
      `Expected mutation testMutation to be called. Mutations called:\n` +
        `CreateTodoMutation`
    );
  });

  it("expectMutationToBeCalled function returns a message when the expected variables are not returned", () => {
    const testingHelper = new TestingHelper();
    testingHelper.reinit();
    const variables = commitMutation(testingHelper.environment, {
      mutation: CreateTodoMutation,
      variables: { connections: "test", input: "test" },
    });

    expect(() => {
      testingHelper.expectMutationToBeCalled("CreateTodoMutation", {
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

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { RelayEnvironmentProvider, loadQuery, usePreloadedQuery, } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import TodoList from './components/TodoList';
const { Suspense } = React;
// Define a query
//relay doesn't like it if you spread within a root query
const AppAllTodosQuery = graphql `
query AppQuery {
    ...TodoList_query
}
`;
// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, AppAllTodosQuery, {
/* query variables */
});
// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props) {
    const data = usePreloadedQuery(AppAllTodosQuery, props.preloadedQuery);
    return (_jsxs("div", { className: "App", children: [_jsx("header", { className: "App-header" }), _jsx("div", { className: "list", children: _jsx(TodoList, { query: data }) })] }));
}
// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props) {
    const component = typeof window !== "undefined" ? (_jsx(Suspense, { fallback: "loading", children: _jsx(App, { preloadedQuery: preloadedQuery }) })) : (_jsx(App, { preloadedQuery: preloadedQuery }));
    return (_jsx(RelayEnvironmentProvider, { environment: RelayEnvironment, children: component }));
}
export default AppRoot;
//# sourceMappingURL=App.js.map
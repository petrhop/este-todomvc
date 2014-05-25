// Generated by github.com/steida/coffee2closure 0.1.3
goog.provide('App');

/**
  @param {este.Router} router
  @param {app.Routes} routes
  @param {app.todos.react.App} reactApp
  @param {Element} element
  @constructor
 */
var App = function(router, routes, reactApp, element) {
  router.add(routes.allTodos, function() {
    return routes.setActive(routes.allTodos);
  });
  router.add(routes.activeTodos, function() {
    return routes.setActive(routes.activeTodos);
  });
  router.add(routes.completedTodos, function() {
    return routes.setActive(routes.completedTodos);
  });
  router.start();
  React.renderComponent(reactApp.create(), element);
}
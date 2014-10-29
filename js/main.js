// Generated by github.com/steida/coffee2closure 0.1.9
goog.provide('app.main');
goog.require('app.DiContainer');

/**
  @param {Object} data Server side data. Useful for config, preload, whatever.
 */
app.main = function(data) {
  var container;
  container = new app.DiContainer;
  container.configure({
    resolve: App,
    "with": {
      element: document.querySelector('#todoapp')
    }
  }, {
    resolve: este.History,
    by: function() {
      return new este.History({
        forceHash: true
      });
    }
  });
  return container.resolveApp();
};
goog.exportSymbol('app.main', app.main);
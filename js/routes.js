// Generated by github.com/steida/coffee2closure 0.1.3
goog.provide('app.Routes');
goog.provide('app.Routes.EventType');
goog.require('este.Route');
goog.require('goog.events.EventTarget');

/**
  @constructor
  @extends {goog.events.EventTarget}
  @final
 */
app.Routes = function() {
  app.Routes.superClass_.constructor.call(this);
  this.allTodos = new este.Route('/');
  this.activeTodos = new este.Route('/active');
  this.completedTodos = new este.Route('/completed');
}
goog.inherits(app.Routes, goog.events.EventTarget);

/**
  @enum {string}
 */
app.Routes.EventType = {
  CHANGE: 'change'
};

/**
  @type {este.Route}
  @private
 */
app.Routes.prototype.active_ = null;

/**
  @param {este.Route} route
 */
app.Routes.prototype.setActive = function(route) {
  this.active_ = route;
  return this.dispatchEvent(app.Routes.EventType.CHANGE);
};

/**
  @return {este.Route}
 */
app.Routes.prototype.getActive = function() {
  return this.active_;
};
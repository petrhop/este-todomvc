// Generated by github.com/steida/coffee2closure 0.1.3
goog.provide('app.todos.Todo');
goog.require('goog.string');

/**
  @param {string=} title
  @param {Function=} randomStringGenerator
  @constructor
 */
app.todos.Todo = function(title, randomStringGenerator) {
  this.title = title != null ? title : '';
  if (randomStringGenerator == null) {
    randomStringGenerator = goog.string.getRandomString;
  }
  this.id = randomStringGenerator();
}

/**
  @type {string}
  @expose
 */
app.todos.Todo.prototype.id = '';

/**
  @type {string}
  @expose
 */
app.todos.Todo.prototype.title = '';

/**
  @type {boolean}
  @expose
 */
app.todos.Todo.prototype.completed = false;

/**
  @type {boolean}
  @expose
 */
app.todos.Todo.prototype.editing = false;
app.todos.Todo.prototype.toggle = function() {
  return this.completed = !this.completed;
};
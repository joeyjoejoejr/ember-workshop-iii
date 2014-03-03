var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('widgets', function() {
    this.route('new');
  });

  this.resource('widget', { path: "/widget/:widget_id" }, function() {
    this.route('edit');
    this.route('delete');
  });
});

export default Router;

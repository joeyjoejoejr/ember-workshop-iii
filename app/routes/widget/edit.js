import Widget from "appkit/models/widget";

export default Ember.Route.extend({
  model: function() {
    return this.modelFor("widget");
  },
  actions: {
    formSubmitted: function(widget) {
      self = this;
      widget.update().then(function() {
        self.transitionTo("widget");
      });
    }
  }
});

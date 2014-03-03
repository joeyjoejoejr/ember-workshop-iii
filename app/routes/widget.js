import Widget from "appkit/models/widget";

export default Ember.Route.extend({
  model: function(params) {
    return Widget.find(params.widget_id);
  },
  actions: {
    deleteWidget: function(widget) {
      self = this;
      widget.delete().then(function() {
        self.modelFor("widgets").removeObject(widget);
        self.transitionTo("widgets");
      });
    }
  }
});

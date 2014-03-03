import Widget from "appkit/models/widget";

export default Ember.Route.extend({
  model: function(params) {
    return Widget.find(params.widget_id)
  },
  actions: {
    deleteWidget: function(widget) {
      this.modelFor("widgets").removeObject(widget);
      this.transitionTo("widgets");
    }
  }
});

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor("widgets").filter(function(widget) {
      return(widget.get("id") === params.widget_id);
    });
  },
  actions: {
    deleteWidget: function(widget) {
      this.modelFor("widgets").removeObject(widget);
      this.transitionTo("widgets");
    }
  }
});

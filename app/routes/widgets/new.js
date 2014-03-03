export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create({});
  },
  setupController: function(controller, model) {
    this.modelFor("widgets").pushObject(model);
    controller.set("content", model);
  },
  actions: {
    formSubmitted: function() {
      this.transitionTo("widget");
    }
 }
});

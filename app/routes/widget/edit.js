export default Ember.Route.extend({
  model: function() {
    return(this.modelFor("widget"));
  },
  actions: {
    formSubmitted: function() {
      this.transitionTo("widget");
    }
  }
});

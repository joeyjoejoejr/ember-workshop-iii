import Widget from "appkit/models/widget";

export default Ember.Route.extend({
  model: function() {
    return Widget.create({});
  },
  setupController: function(controller, model) {
    this.modelFor("widgets").pushObject(model);
    controller.set("content", model);
  },
  actions: {
    formSubmitted: function(widget) {
      var self = this;
      widget.save().then(function(data) {
        widget.set("objectId", data.objectId);
        self.transitionTo("widgets");
      }).fail(function(error) {
        self.modelFor("widgets").removeObject(widget);
      });
    }
  }
});

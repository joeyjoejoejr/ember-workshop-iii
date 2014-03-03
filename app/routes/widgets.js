import Widget from "appkit/models/widget";

export default Ember.Route.extend({
  model: function() {
    return Widget.findAll();
  }
});

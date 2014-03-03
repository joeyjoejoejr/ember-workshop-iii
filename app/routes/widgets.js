export default Ember.Route.extend({
  model: function() {
    return [
      Ember.Object.create({ id: 1, name: "Coswell Cog" }),
      Ember.Object.create({ id: 2, name: "Spacely Sprocket" }),
      Ember.Object.create({ id: 3, name: "Rosie XB-500" })
    ];
  }
});

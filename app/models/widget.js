import ajax from "appkit/utils/ajax";

var Widget = Ember.Object.extend({});
Widget.reopenClass({
  findAll: function() {
    return ajax("https://api.parse.com/1/classes/Widget", {
      headers: {
         "X-Parse-Application-Id": "YECyeBU4LQ0kiCspsZJyhZ5ynHHvkRrlcD9hlYh6",
         "X-Parse-REST-API-Key": "Rw0XkmKO8avoGMXgaGdsR3r8teYU0YXs7jUN5CFY"
      }
    }).then(function(data) {
      return data.results;
    });
  }
});

export default Widget;

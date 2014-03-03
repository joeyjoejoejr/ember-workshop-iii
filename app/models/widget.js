import ajax from "appkit/utils/ajax";
var Widget = Ember.Object.extend({
  save: function() {
    return ajax("https://api.parse.com/1/classes/Widget/", {
      type: "POST",
      contentType: "application/json",
      headers: {
         "X-Parse-Application-Id": "YECyeBU4LQ0kiCspsZJyhZ5ynHHvkRrlcD9hlYh6",
         "X-Parse-REST-API-Key": "Rw0XkmKO8avoGMXgaGdsR3r8teYU0YXs7jUN5CFY"
       },
      data: JSON.stringify({
        name: this.get("name")
      })
    });
  },
  update: function() {
    return ajax("https://api.parse.com/1/classes/Widget/" + this.get("objectId"), {
      type: "PUT",
      contentType: "application/json",
      headers: {
         "X-Parse-Application-Id": "YECyeBU4LQ0kiCspsZJyhZ5ynHHvkRrlcD9hlYh6",
         "X-Parse-REST-API-Key": "Rw0XkmKO8avoGMXgaGdsR3r8teYU0YXs7jUN5CFY"
       },
      data: JSON.stringify({
        name: this.get("name")
      })
    });
  }
});

Widget.reopenClass({
  find: function(parse_id) {
    return ajax("https://api.parse.com/1/classes/Widget/" + parse_id, {
        headers: {
           "X-Parse-Application-Id": "YECyeBU4LQ0kiCspsZJyhZ5ynHHvkRrlcD9hlYh6",
           "X-Parse-REST-API-Key": "Rw0XkmKO8avoGMXgaGdsR3r8teYU0YXs7jUN5CFY"
         }
    }).then(function(data) {
      return Widget.create(data);
    });
  },
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

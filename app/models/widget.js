import ajax from "appkit/utils/ajax";

var widgetAjax = function(path, method, data) {
  return ajax("https://api.parse.com/1/classes/Widget/" + path, {
    type: method,
    contentType: "application/json",
    headers: {
      "X-Parse-Application-Id": "YECyeBU4LQ0kiCspsZJyhZ5ynHHvkRrlcD9hlYh6",
      "X-Parse-REST-API-Key": "Rw0XkmKO8avoGMXgaGdsR3r8teYU0YXs7jUN5CFY"
    },
    data: JSON.stringify(data)
  });
};

var Widget = Ember.Object.extend({
  save: function() {
    return widgetAjax("", "POST", { name: this.get("name") });
  },
  update: function() {
    return widgetAjax(this.get("objectId"), "PUT", { name: this.get("name") });
  },
  delete: function() {
    return widgetAjax(this.get("objectId"), "DELETE", {});
  }
});

Widget.reopenClass({
  find: function(parse_id) {
    return widgetAjax(parse_id, "GET", {}).then(function(data) {
      return Widget.create(data);
    });
  },
  findAll: function() {
    return widgetAjax("", "GET", {}).then(function(data) {
      return data.results.map(function(result) {
        return Widget.create(result);
      });
    });
  }
});

export default Widget;

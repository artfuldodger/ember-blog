// This is to make JSHint, which is run when visiting /tests, happy
/*global Showdown:false*/

import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(markdown) {
  var showdown = new Showdown.converter();

  return new Ember.Handlebars.SafeString(showdown.makeHtml(markdown));
});
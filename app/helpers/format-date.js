// This is to make JSHint, which is run when visiting /tests, happy
/*global moment:false */

import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).fromNow();
});
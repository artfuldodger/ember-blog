import Ember from "ember";
var PostController;

PostController = {
  isEditing: false,
  actions: {
    edit: function() {
      return this.set('isEditing', true);
    },
    doneEditing: function() {
      return this.set('isEditing', false);
    }
  }
};

export default Ember.Controller.extend(PostController);
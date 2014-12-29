`import Ember from "ember";`

PostController = {
  isEditing: false,
  actions: {
    edit: ->
      @set('isEditing', true)

    doneEditing: ->
      @set('isEditing', false)
  }
}

`export default Ember.ObjectController.extend(PostController);`

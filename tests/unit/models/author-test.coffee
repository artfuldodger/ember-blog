`import { test, moduleForModel } from 'ember-qunit'`

moduleForModel 'author', 'Author', {
  # Specify the other units that are required for this test.
  needs: ['model:post']
}

test 'it exists', ->
  model = @subject()
  # store = @store()
  ok !!model

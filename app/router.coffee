`import Ember from 'ember';`
`import config from './config/environment';`

Router = Ember.Router.extend(
  location: config.locationType
)

Router.map ->
  @route 'about'
  @resource 'posts'
  @resource 'post', { path: '/posts/:post_id' }

`export default Router;`

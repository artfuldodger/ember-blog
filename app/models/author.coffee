`import DS from 'ember-data'`

Author = DS.Model.extend {
  posts: DS.hasMany('post'),
  name: DS.attr('string')
}

`export default Author`

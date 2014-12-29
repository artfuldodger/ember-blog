import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  author: DS.belongsTo('author'),
  title: attr('string'),
  body: attr('string')
});

import DS from 'ember-data';

export default DS.RESTAdapter.reopen({
  namespace: 'api'
});
import Ember from 'ember';

export default Ember.Route.extend({
	// this will make sure the hard url to the post id works
	model: function(params) {
		return this.store.find('post', params.id);
	}
});
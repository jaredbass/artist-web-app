import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel: function() {
		document.title = "Artists";
	},

	model: function(doWork) {
		var url = 'http://itp-api.herokuapp.com/api/artists'
		return $.getJSON(url);
	},

	afterModel: function(model) {
		console.log(model.artists);
	}
});

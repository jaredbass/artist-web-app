import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
		document.title="Artist";
	},

	model: function(doStuff){
		var url = 'http://itp-api.herokuapp.com/api/artists/' + doStuff.id + '/songs';
		return $.getJSON(url);
	},

	afterModel: function(model){
		console.log(model);
	}
});

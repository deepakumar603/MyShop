import DS from 'ember-data';


export default DS.RESTAdapter.extend({
	
	headers : {
		"X-Spree-Token" : "ad76617dfee35d1b793d8d67187e85c7075ccea6bed232c9"
	},

    host: 'http://venky.roroid.asia',
    namespace: 'api'
});
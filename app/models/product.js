import DS from 'ember-data';

export default DS.Model.extend({
  master: DS.belongsTo('master'),

  images: function (){
  	return this.get('master.images');
  } .property('master.images'),

  mainImage: function(){
  	return this.get('images.firstObject');
  }.property('images.firstObject'),

  imageUrl: function () {
  	return "http://venky.roroid.asia"+this.get('mainImage.small_url');
  }.property('mainImage.small_url')
});
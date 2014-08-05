import DS from 'ember-data';

export default DS.Model.extend({
  display_price: DS.attr('string'),
  images: DS.hasMany('image')
});
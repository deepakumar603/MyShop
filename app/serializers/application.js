import DS from 'ember-data';



export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {

    	master: {embedded: 'always'} ,
        images: {embedded: 'always'} ,
  },

  extractArray: function(store, type, payload) {
        delete payload.count;
        delete payload.total_count;
        delete payload.current_page;
        delete payload.per_page;
        delete payload.pages;

        return this._super(store, type, payload);
 }
   
   
});
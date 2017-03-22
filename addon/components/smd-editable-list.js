import Ember from 'ember';
import Form from 'ember-sauce-material-design/components/smd-form';

export default Form.extend({
  // Attributes
  tagName: 'div',
  classNames: ['smd-editable-list'],
  items: null,
  // Computed
  hasItemsArray: Ember.computed('items',function(){
    let items = this.get('items');
    return Ember.isArray(items);
  }),
  showAdd: true,
  showRemove: true,
  // Actions
  actions: {
    addItem: function(sourceItem) {
      this.sendAction('addItem',sourceItem);
    },
    removeItem: function(item) {
      this.sendAction('removeItem', item);
    }
  }
});

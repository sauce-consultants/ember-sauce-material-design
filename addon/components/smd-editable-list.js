import Ember from 'ember';
import layout from '../templates/components/smd-editable-list';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
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

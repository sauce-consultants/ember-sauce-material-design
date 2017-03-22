import Ember from 'ember';
import layout from '../templates/components/smd-editable-list-item';

export default Ember.Component.extend({
  layout,
  tagName: 'div',
  classNames: ["smd-editable-list__item"],
  showRemove: true,
  actions: {
    removeItem: function(button)
    {
      this.sendAction('removeItem',button.item);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
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

import Ember from 'ember';
import layout from '../templates/components/smd-item-action';

export default Ember.Component.extend({
  layout,
  // Attributes
  icon: null,
  label: null,
  action: null,
  // Computed
  hasLabel: Ember.computed.bool('label'),
  hasAction: Ember.computed.bool('icon'),
  actionClassNames: Ember.computed('label', function () {
    var classNames = [];
    classNames.push('smd-item__action');
    if (this.get('label')) {
      classNames.push('smd-item__action--labeled');
    }
    return classNames.join(' ');
  }),
  // Actions
  actions: {
    buttonAction: function () {
      if (this.get('action')) {
        this.sendAction('action',this);
      }
    }
  }
});

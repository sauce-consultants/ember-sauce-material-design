import Ember from 'ember';
import layout from '../templates/components/smd-toolbar-item';

const {
  Component,
  computed,
  computed: {
    bool
  },
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  align: 'bottom-right',
  options: [],
  selectedOption: null,
  icon: null,
  // Computed
  isDropdown: bool('options.length'),
  items: computed('options', 'sort', function() {
    let items = [];
    this.get('options').forEach((option) => {
      items.push({
        text: option.text,
        value: option.value,
        icon: this.get('selectedOption') === option.value ? 'check' : 'none',
      });
    });
    return items;
  }),
  // Actions
  actions: {
    itemAction(button) {
      this.sendAction('action', button, this);
    },
  },
});

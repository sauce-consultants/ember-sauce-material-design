import Ember from 'ember';
import layout from '../templates/components/smd-tab';

const {
  LinkComponent,
  computed,
  computed: {
    alias,
    bool,
  }
} = Ember;

export default LinkComponent.extend({
  // Attributes
  layout,
  classNames: [
    'mdl-tabs__tab',
  ],
  classNameBindings: [
    'themeClass'
  ],
  // Computed
  hasParentView: bool('parentView'),
  theme: alias('parentView.theme'),
  themeClass: computed('hasParentView', 'theme', function() {
    if (this.get('hasParentView')) {
      return 'mdl-tabs__tab--' + this.get('theme');
    }
  }),
  // Methods
  didInsertElement() {
    this._super(...arguments);
    window.componentHandler.upgradeElement(this.element);
  },
});

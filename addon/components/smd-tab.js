import Ember from 'ember';
import layout from '../templates/components/smd-tab';

const {
  LinkComponent,
  computed,
  computed: {
    alias
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
  theme: alias('parentView.theme'),
  themeClass: computed('theme', function() {
    return 'mdl-tabs__tab--' + this.get('theme');
  }),
});

import Ember from 'ember';
import layout from '../templates/components/smd-navbar';

const {
  Component,
  computed,
  computed: {
    bool
  },
} = Ember;

export default Component.extend({
  // Services
  appState: Ember.inject.service('smd-app-state'),
  // Attributes
  layout,
  classNames: [
    'smd-navbar',
    'mdl-layout__header',
    'mdl-layout__header--app',
  ],
  classNameBindings: [
    'waterfallClass',
    'scroll:mdl-layout__header--scroll',
    'hideTop:mdl-layout__header--waterfall-hide-top',
    'transparent:mdl-layout__header--transparent',
    'noShadow:mdl-layout__header--seamed',
  ],
  tagName: 'header',
  title: 'App Name',
  scroll: false, // Makes the header scroll with the content
  waterfall: false, // Allows a "waterfall" effect with multiple header lines
  hideTop: false, // Hides the top rather than the bottom rows on a waterfall header	Requires waterfall
  transparent: false, //Makes header transparent (draws on top of layout background)
  noShadow: false, // Uses a header without a shadow	Optional; goes on header element
  multipleRows: false,
  // Computed
  hasMultipleRows: bool('multipleRows'),
  waterfallClass: computed('waterfall', 'hideTop', function() {
    if (this.get('waterfall') || this.get('hideTop')) {
      return 'mdl-layout__header--waterfall';
    }
  }),
  // Actions
  actions: {
    toggleDrawer: function() {
      console.log(this.get('appState.isDrawerVisible'));
      this.toggleProperty('appState.isDrawerVisible');
    }
  }
});

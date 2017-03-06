import Ember from 'ember';
import layout from '../templates/components/smd-app-header';

const {
  Component,
  computed,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  classNames: ['mdl-layout__header'],
  classNameBindings: [
    'scrollClass',
    'waterfallClass',
    'hideTopClass',
    'transparentClass',
    'noShadowClass',
  ],
  tagName: 'header',
  scroll: false, // Makes the header scroll with the content
  waterfall: false, // Allows a "waterfall" effect with multiple header lines
  hideTop: false, // Hides the top rather than the bottom rows on a waterfall header	Requires waterfall
  transparent: false, //Makes header transparent (draws on top of layout background)
  noShadow: false, // Uses a header without a shadow	Optional; goes on header element
  multipleRows: false,
  // Computed
  hasMultipleRows: computed.bool('multipleRows'),
  scrollClass: computed('scroll', function() {
    if (this.get('scroll')) {
      return 'mdl-layout__header--scroll';
    }
  }),
  waterfallClass: computed('waterfall', 'hideTop', function() {
    if (this.get('waterfall') || this.get('hideTop')) {
      return 'mdl-layout__header--waterfall';
    }
  }),
  hideTopClass: computed('hideTop', function() {
    if (this.get('hideTop')) {
      return 'mdl-layout__header--waterfall-hide-top';
    }
  }),
  transparentClass: computed('transparent', function() {
    if (this.get('transparent')) {
      return 'mdl-layout__header--transparent';
    }
  }),
  noShadowClass: computed('noShadow', function() {
    if (this.get('noShadow')) {
      return 'mdl-layout__header--seamed';
    }
  }),
});

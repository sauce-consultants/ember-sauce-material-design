import Ember from 'ember';
import layout from '../templates/components/smd-page-footer';

const {
  Component,
  computed: {
    bool,
  },
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'footer',
  classNames: ['smd-page__footer'],
  text: null,
  // Computed
  hasText: bool('text'),
});

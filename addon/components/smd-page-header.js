import Ember from 'ember';
import layout from '../templates/components/smd-page-header';

const {
  Component,
  computed: {
    bool,
  },
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'header',
  classNames: ['smd-page__header'],
  title: null,
  // Computed
  hasTitle: bool('title'),
});

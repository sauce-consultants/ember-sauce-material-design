import Ember from 'ember';
import layout from '../templates/components/smd-badge';
import Badgeable from '../mixins/badge-support';

const {
  Component
} = Ember;

export default Component.extend(Badgeable, {
  layout,
  text: null,
  tagName: 'span',
});

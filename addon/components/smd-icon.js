import Ember from 'ember';
import layout from '../templates/components/smd-icon';
import Badgeable from '../mixins/badge-support';

const {
  Component
} = Ember;

export default Component.extend(Badgeable, {
  classNames: ['icon', 'material-icons'],
  layout
});

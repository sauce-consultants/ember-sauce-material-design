import Ember from 'ember';
import layout from '../templates/components/smd-tab';

export default Ember.LinkComponent.extend({
  layout,
  classNames: [
    'mdl-tabs__tab',
  ],
});

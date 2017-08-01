import Ember from 'ember';
import StackableRoute from 'ember-sauce-material-design/mixins/smd-stackable-header-route';

const {
  Route,
} = Ember;

export default Route.extend(StackableRoute, {
  headerProps: {
    crumb: 'Father',
    title: 'Fathers Sibling',
    backIcon: 'keyboard_arrow_left',
  },
});

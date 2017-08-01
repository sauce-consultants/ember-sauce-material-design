import Ember from 'ember';
import StackableRoute from 'ember-sauce-material-design/mixins/smd-stackable-header-route';

const {
  Route,
} = Ember;

export default Route.extend(StackableRoute, {
  headerProps: {
    crumb: 'Stack',
    title: 'Father',
    backIcon: 'keyboard_arrow_left',
    toolbarIconOne: 'accessibility',
    toolbarIconTwo: 'account_balance',
    toolbarIconThree: 'android',
  },
});

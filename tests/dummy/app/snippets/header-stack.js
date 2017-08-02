// BEGIN-SNIPPET smd-header-stackable-route
import Ember from 'ember';
import StackableRoute from 'ember-sauce-material-design/mixins/smd-stackable-header-route';

const {
  Route,
} = Ember;

export default Route.extend(StackableRoute, {
  headerProps: {
    crumb: 'Bob Loblaw',
    title: 'Edit Bob',
    backIcon: 'keyboard_arrow_left',
  },
});
// END-SNIPPET


// BEGIN-SNIPPET smd-header-stackable-route-inheritance
let parentRoute = Route.extend(StackableRoute, {
  headerProps: {
    crumb: 'home',
    title: 'Users',
    backIcon: 'keyboard_arrow_left',
    toolbarIconOne: 'edit',
  },
});

let childRoute = Route.extend(StackableRoute, {
  headerProps: {
    crumb: 'Bob Loblaw',
    title: 'Edit Bob',
    toolbarIconOne: null,
  },
});
// END-SNIPPET

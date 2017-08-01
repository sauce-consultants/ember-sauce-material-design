import Ember from 'ember';
import StackableRoute from 'ember-sauce-material-design/mixins/smd-stackable-header-route';

const {
  Route,
} = Ember;

export default Route.extend(StackableRoute, {
  headerProps: {
    title: 'Header Stack',
    action: 'headerAction'
  },
  actions: {
    headerAction(action, item) {
      Ember.Logger.log('headerAction ' + action);
      Ember.Logger.log(item);
    }
  }
});

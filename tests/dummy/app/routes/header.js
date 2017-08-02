import Ember from 'ember';
import StackableRoute from 'ember-sauce-material-design/mixins/smd-stackable-header-route';

const {
  Route
} = Ember;

export default Route.extend(StackableRoute, {
  headerProps: {
    title: 'Header',
    backIcon: 'arrow_back',
    backAction: 'back'
  },
  actions: {
    headerAction: function(event /*, header*/ ) {
      window.alert('headerAction called with event = ' + event);
    },
    goBack: function( /*header*/ ) {
      window.alert('back button clicked');
    },
    goToNew: function( /*header*/ ) {
      window.alert('fab button clicked');
    },
  },
});

import Ember from 'ember';
import FabableRoute from 'ember-sauce-material-design/mixins/smd-fabable-route';

const {
  Route,
} = Ember;

export default Route.extend(FabableRoute, {
  fabIcon: "send",
  // Actions
  actions: {
    fabAction: function( /* fab */ ) {
      window.alert("Fab Fired!");
    },
  },
});

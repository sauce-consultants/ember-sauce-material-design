import Ember from 'ember';

const {
  Route,
  inject: {
    service
  },
} = Ember;

export default Route.extend({
  header: service('smd-header-service'),
  activate: function() {
    let hash = {
      title: 'Button Links',
      backIcon: 'arrow_back',
      backAction: 'back',
    };
    this.get('header').setup(hash);
  },
});

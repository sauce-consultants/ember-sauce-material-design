import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    return this.store.createRecord('user', {
      admin: false,
      mailingList: true,
    });
  },
});

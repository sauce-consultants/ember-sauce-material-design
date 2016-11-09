import Ember from 'ember';

export default Ember.Helper.extend({
  state: Ember.inject.service('smd-subheader-state'),
  compute(params) {
    var subheader = params[0];
    var className;
    if (params.length > 1) {
      className = params[1];
    }
    if (this.get('state.subheader') !== subheader) {
      this.set('state.subheader', subheader);
      return Ember.String.htmlSafe('<h2 class="smd-subheader ' + className + '">' + subheader + '</h2>');
    }
  }
});

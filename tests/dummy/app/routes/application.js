import Ember from 'ember';

export default Ember.Route.extend({

  activate: function() {
    Ember.run.next(this, function() {
      Ember.$('body > .ember-view').addClass('mdl-layout mdl-js-layout mdl-styleguide');

      //componentHandler.upgradeDom();
    });
  },

});

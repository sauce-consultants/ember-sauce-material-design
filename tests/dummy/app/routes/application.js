import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  actions: {
    back: function() {
      this.transitionTo('home');
    },
    jumpToTop: function() {
      this.scrollTo('#top');
    },
    jumpToAttributes: function() {
      this.scrollTo('#attributes');
    },
    jumpToActions: function() {
      this.scrollTo('#actions');
    },
  },
  scrollTo: function(element) {
    if ($(element).length) {

      let position = $(element).offset().top - 128;

      $('.smd-page--scrollable').animate({
        scrollTop: position
      }, 200);
    } else {
      Ember.Logger.warn('Could not scroll to element ' + element);
    }
  },
});

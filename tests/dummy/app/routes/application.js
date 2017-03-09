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
    let position = $(element).offset().top - 128;
    Ember.Logger.log(position);
    $('.smd-page--scrollable').animate({
      scrollTop: position
    }, 200);
  }
});

import Ember from 'ember';
import StackableRoute from 'ember-sauce-material-design/mixins/smd-stackable-header-route';

const {
  Route
} = Ember;

export default Route.extend(StackableRoute, {
  headerProps: {
    title: 'Sauce Material Design',
  },
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

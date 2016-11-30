import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  //rootURL: config.rootURL
});

Router.map(function() {
  this.route('header');
  this.route('item');
  this.route('empty');
  this.route('forms', function() {
    this.route('select');
    this.route('radio');
  });
  this.route('dropdown');

});

export default Router;

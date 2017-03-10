import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  //rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('layout');
  this.route('header');
  this.route('button');
  this.route('icon');
  this.route('dropdown');
  this.route('tabs', function() {
    this.route('two');
    this.route('three');
    this.route('four');
  });

  // Old Routes (Days numbered)
  this.route('item');
  this.route('empty');
  this.route('forms', function() {
    this.route('select');
    this.route('radio');
    this.route('switch');
    this.route('icon');
  });

});

export default Router;

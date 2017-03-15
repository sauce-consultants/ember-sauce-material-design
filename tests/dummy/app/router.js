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
  this.route('header', function() {
    this.route('service');
  });
  this.route('button');
  this.route('icon');
  this.route('dropdown');
  this.route('tabs', function() {
    this.route('two');
    this.route('three');
    this.route('four');
  });
  this.route('list', function() {
    this.route('item');
    this.route('empty');
    this.route('subheading');
    this.route('scrollable');
    this.route('example');
  });
  this.route('dialog', function() {
    this.route('open');
  });
  this.route('animation');

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

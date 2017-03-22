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
  this.route('layout', function() {
    this.route('page');
  });
  this.route('header', function() {
    this.route('service');
  });
  this.route('button', function() {
    this.route('link');
    this.route('icon');
    this.route('badge');
  });
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
  this.route('editable-list');
  this.route('dialog', function() {
    this.route('modal', function() {
      this.route('default');
      this.route('with-footer');
      this.route('with-form');
      this.route('no-header');
    });
  });
  this.route('animation');
  this.route('data-list');

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

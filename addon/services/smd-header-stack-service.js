import Ember from 'ember';

const {
  Service,
  inject: {
    service,
  },
} = Ember;

export default Service.extend({
  // Services
  header: service('smd-header-service'),
  // Attributes
  _stack: [],
  _defaults: {
    // Attributes
    title: null,
    backIcon: null,
    crumb: null,
    toolbarIconOne: null,
    toolbarIconTwo: null,
    toolbarIconThree: null,
    fabIcon: null,
    isMiniFab: null,
    isRightFab: null,
    coverImageClass: null,
    coverImageSrc: null,
    isMinimized: null,
    scrolling: null,
    scrollContext: null,
    // Actions
    action: null,
    backAction: null,
    fabAction: null,
    toolbarActionOne: null,
    toolbarActionTwo: null,
    toolbarActionThree: null,
    searchAction: false,
    searchTerm: null,
  },
  // Public Methods
  clear() {
    this.set('_stack', []);
  },
  push(props) {
    this.get('_stack').push(props);
    this.refresh();
  },
  pop() {
    this.get('_stack').pop();
    this.refresh();
  },
  refresh() {
    let merged = this.getHash();
    this.get('header').setup(merged);
  },
  getHash() {
    let hash = this._mergeProps();
    return hash;
  },
  // Private Methods
  _mergeDefaults(props) {
    let defaults = Ember.Object.create(this.get('_defaults'));
    return Ember.merge(defaults, props);
  },
  _mergeProps() {
    let stack = this.get('_stack'),
      merged = stack.reduce((acc, props) => Ember.merge(acc, props), {});
    return this._mergeDefaults(merged);
  },
});

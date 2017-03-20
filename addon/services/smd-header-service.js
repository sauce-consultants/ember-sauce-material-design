import Ember from 'ember';

const {
  copy,
  merge,
  Service,
} = Ember;

export default Service.extend({
  // Attributes
  title: null,
  backIcon: null,
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
  // Methods
  clear: function() {
    let defaults = copy(this.get('_defaults'));
    Object.keys(defaults).forEach(
      (key) => {
        this.set(key, defaults[key]);
      }
    );
  },
  setup: function(hash) {
    let defaults = copy(this.get('_defaults'));
    merge(defaults, hash);
    Object.keys(defaults).forEach(
      (key) => {
        this.set(key, defaults[key]);
      }
    );
  },
  // Private Attributes
  _defaults: {
    // Attributes
    title: null,
    backIcon: null,
    toolbarIconOne: null,
    toolbarIconTwo: null,
    toolbarIconThree: null,
    fabIcon: null,
    isMiniFab: false,
    isRightFab: false,
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
});

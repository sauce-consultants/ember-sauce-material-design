import Ember from 'ember';
import layout from '../templates/components/smd-header';

export default Ember.Component.extend({
  // Component setup
  layout,
  tagName: 'header',
  classNames: 'smd-header',
  classNameBindings: ['fabClassModifier', 'minimizedClassModifier'],
  // Attributes
  item: null,
  title: '',
  backIcon: 'arrow_back',
  toolbarIconOne: null,
  toolbarIconTwo: null,
  toolbarIconThree: null,
  fabIcon: null,
  coverImageClass: null,
  coverImageSrc: null,
  isMiniFab: false,
  isRightFab: false,
  isMinimized: false,
  hasBack: true,
  // Actions
  toolbarActionOne: null,
  toolbarActionTwo: null,
  toolbarActionThree: null,
  // Computed
  fabClassModifier: Ember.computed('hasFab', function () {
    if (this.get('hasFab')) {
      return 'smd-header--with-fab';
    }
  }),
  minimizedClassModifier: Ember.computed('isMinimized', function () {
    if (this.get('isMinimized')) {
      return 'smd-header--minimized';
    }
  }),
  fabClassNames: Ember.computed('isMiniFab', 'isRightFab', function () {
    var classNames = [];
    if (this.get('isMiniFab')) {
      classNames.push('smd-header__mini-fab');
      if (this.get('isRightFab')) {
        classNames.push('smd-header__mini-fab--right');
      }
    } else {
      classNames.push('smd-header__fab');
      if (this.get('isRightFab')) {
        classNames.push('smd-header__fab--right');
      }
    }
    return classNames.join(' ');
  }),
  searchClassNames: Ember.computed('isMiniFab', function () {
    var classNames = [];
    if (this.get('isMiniFab')) {
      classNames.push('smd-header__mini-search');
    } else {
      classNames.push('smd-header__search');
    }
    return classNames.join(' ');
  }),
  hasFab: Ember.computed.bool('fabIcon'),
  hasBack: Ember.computed.bool('backIcon'),
  hasToolbarOne: Ember.computed.bool('toolbarIconOne'),
  hasToolbarTwo: Ember.computed.bool('toolbarIconTwo'),
  hasToolbarThree: Ember.computed.bool('toolbarIconThree'),
  hasCoverImageClass: Ember.computed.bool('coverImageClass'),
  hasCoverImageSrc: Ember.computed.bool('coverImageSrc'),
  // actions
  actions: {
    backAction: function () {
      if (this.get('backAction')) {
        this.sendAction('backAction', this.get('item'));
      } else if (this.get('action')) {
        this.sendAction('action', 'back', this.get('item'));
      }
    },
    toolbarActionOne: function () {
      if (this.get('toolbarActionOne')) {
        this.sendAction('toolbarActionOne', this.get('item'));
      } else if (this.get('action')) {
        this.sendAction('action', 'toolbarOne', this.get('item'));
      }
    },
    toolbarActionTwo: function () {
      if (this.get('toolbarActionTwo')) {
        this.sendAction('toolbarActionTwo', this.get('item'));
      } else if (this.get('action')) {
        this.sendAction('action', 'toolbarTwo', this.get('item'));
      }
    },
    toolbarActionThree: function () {
      if (this.get('toolbarActionThree')) {
        this.sendAction('toolbarActionThree', this.get('item'));
      } else if (this.get('action')) {
        this.sendAction('action', 'toolbarThree', this.get('item'));
      }
    }
  }
});

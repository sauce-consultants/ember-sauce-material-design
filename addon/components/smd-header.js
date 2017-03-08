import Ember from 'ember';
import layout from '../templates/components/smd-header';

const {
  Component,
  computed,
  computed: {
    bool
  }
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'header',
  classNames: 'smd-header',
  classNameBindings: ['fabClassModifier', 'minimizedClassModifier'],
  title: '',
  backIcon: null,
  toolbarIconOne: null,
  toolbarIconTwo: null,
  toolbarIconThree: null,
  fabIcon: null,
  coverImageClass: null,
  coverImageSrc: null,
  isMiniFab: false,
  isRightFab: false,
  isMinimized: false,
  scrolling: false,
  scrollContext: '.page-content',
  // Actions
  backAction: null,
  fabAction: null,
  toolbarActionOne: null,
  toolbarActionTwo: null,
  toolbarActionThree: null,
  searchAction: false,
  searchTerm: null,
  // Computed
  fabClassModifier: computed('hasFab', function() {
    if (this.get('hasFab')) {
      if (this.get('isMiniFab')) {
        return 'smd-header--with-mini-fab';
      } else {
        return 'smd-header--with-fab';
      }
    }
  }),
  minimizedClassModifier: computed('isMinimized', function() {
    if (this.get('isMinimized')) {
      return 'smd-header--minimized';
    }
  }),
  fabClassNames: computed('isMiniFab', 'isRightFab', function() {
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
  searchClassNames: computed('isMiniFab', function() {
    var classNames = [];
    if (this.get('isMiniFab')) {
      classNames.push('smd-header__mini-search');
    } else {
      classNames.push('smd-header__search');
    }
    return classNames.join(' ');
  }),
  hasTitle: bool('title'),
  hasFab: bool('fabIcon'),
  hasBack: bool('backIcon'),
  hasToolbarOne: bool('toolbarIconOne'),
  hasToolbarTwo: bool('toolbarIconTwo'),
  hasToolbarThree: bool('toolbarIconThree'),
  hasCoverImageClass: bool('coverImageClass'),
  hasCoverImageSrc: bool('coverImageSrc'),
  hasSearch: bool('searchAction'),
  // Actions
  actions: {
    backAction: function() {
      if (this.get('backAction')) {
        this.sendAction('backAction', this);
      } else if (this.get('action')) {
        this.sendAction('action', 'back', this);
      }
    },
    fabAction: function() {
      if (this.get('fabAction')) {
        this.sendAction('fabAction', this);
      } else if (this.get('action')) {
        this.sendAction('action', 'fab', this);
      }
    },
    toolbarActionOne: function() {
      if (this.get('toolbarActionOne')) {
        this.sendAction('toolbarActionOne', this);
      } else if (this.get('action')) {
        this.sendAction('action', 'toolbarOne', this);
      }
    },
    toolbarActionTwo: function() {
      if (this.get('toolbarActionTwo')) {
        this.sendAction('toolbarActionTwo', this);
      } else if (this.get('action')) {
        this.sendAction('action', 'toolbarTwo', this);
      }
    },
    toolbarActionThree: function() {
      if (this.get('toolbarActionThree')) {
        this.sendAction('toolbarActionThree', this);
      } else if (this.get('action')) {
        this.sendAction('action', 'toolbarThree', this);
      }
    },
    searchAction: function(term) {
      this.sendAction('searchAction', term);
    }
  },
  // Methods
  didInsertElement: function() {
    Ember.Logger.log("did insert " + this.elementId);
    if (this.get('scrolling')) {
      Ember.Logger.log('scroll ' + this.elementId);
      this.initScrollEvent();
    }
  },
  initScrollEvent: function() {
    let $header = this.$(),
      $body = this.getScrollElement(),
      height = parseInt($header.outerHeight());

    $body.addClass('smd-page--scrollable');
    $body.scroll(() => {
      this.onScroll($header, $body, $body.scrollTop(), height);
    });
  },
  onScroll: function($header, $body, scrollAmount, maxHeight) {

    $header.addClass('smd-header--transition');

    let height = maxHeight - scrollAmount,
      minHeight = parseInt($header.css('min-height')),
      maxPadding = maxHeight - minHeight;

    if (height > minHeight) {
      // mid transition
      $header.css('height', height);
      $body.css('padding-top', scrollAmount);

      $header.removeClass('smd-header--minimized');
    } else {
      // minimized
      $header.css('height', minHeight);
      $body.css('padding-top', maxPadding);

      $header.addClass('smd-header--minimized');
      $header.removeClass('smd-header--transition');
    }
  },
  getScrollElement: function() {
    let $page = this.$().next('.smd-page');
    if ($page.length) {
      return $page;
    }
    Ember.Logger.warn('Can not find a sibling element .smd-page for scrollable smd-header');
    return Ember.$('body');
  }
});

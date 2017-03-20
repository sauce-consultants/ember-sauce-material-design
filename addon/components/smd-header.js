import Ember from 'ember';
import layout from '../templates/components/smd-header';

const {
  Component,
  computed,
  computed: {
    bool,
  },
  inject: {
    service,
  },
} = Ember;

export default Component.extend({
  // Service
  service: service('smd-header-service'),
  // Attributes
  layout,
  tagName: 'header',
  classNames: 'smd-header',
  classNameBindings: ['fabClassModifier', 'minimizedClassModifier'],
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
  // Computed
  _action: computed('action', 'service.action', function() {
    return this._getProperty('action');
  }),
  _title: computed('title', 'service.title', function() {
    return this._getProperty('title');
  }),
  _backIcon: computed('backIcon', 'service.backIcon', function() {
    return this._getProperty('backIcon');
  }),
  _backAction: computed('backAction', 'service.backAction', function() {
    return this._getProperty('backAction');
  }),
  _toolbarIconOne: computed('toolbarIconOne', 'service.toolbarIconOne', function() {
    return this._getProperty('toolbarIconOne');
  }),
  _toolbarActionOne: computed('toolbarActionOne', 'service.toolbarActionOne', function() {
    return this._getProperty('toolbarActionOne');
  }),
  _toolbarIconTwo: computed('toolbarIconTwo', 'service.toolbarIconTwo', function() {
    return this._getProperty('toolbarIconTwo');
  }),
  _toolbarActionTwo: computed('toolbarActionTwo', 'service.toolbarActionTwo', function() {
    return this._getProperty('toolbarActionTwo');
  }),
  _toolbarIconThree: computed('toolbarIconThree', 'service.toolbarIconThree', function() {
    return this._getProperty('toolbarIconThree');
  }),
  _toolbarActionThree: computed('toolbarActionThree', 'service.toolbarActionThree', function() {
    return this._getProperty('toolbarActionThree');
  }),
  _fabIcon: computed('fabIcon', 'service.fabIcon', function() {
    return this._getProperty('fabIcon');
  }),
  _isMiniFab: computed('isMiniFab', 'service.isMiniFab', function() {
    return this._getProperty('isMiniFab', false);
  }),
  _isRightFab: computed('isRightFab', 'service.isRightFab', function() {
    return this._getProperty('isRightFab', false);
  }),
  _fabAction: computed('fabAction', 'service.fabAction', function() {
    return this._getProperty('fabAction');
  }),
  _coverImageClass: computed('coverImageClass', 'service.coverImageClass', function() {
    return this._getProperty('coverImageClass');
  }),
  _coverImageSrc: computed('coverImageSrc', 'service.coverImageSrc', function() {
    return this._getProperty('coverImageSrc');
  }),
  _isMinimized: computed('isMinimized', 'service.isMinimized', function() {
    return this._getProperty('isMinimized', false);
  }),
  _scrolling: computed('scrolling', 'service.scrolling', function() {
    return this._getProperty('scrolling', false);
  }),
  _scrollContext: computed('scrollContext', 'service.scrollContext', function() {
    return this._getProperty('scrollContext', '.smd-page');
  }),
  _searchAction: computed('searchAction', 'service.searchAction', function() {
    return this._getProperty('searchAction', false);
  }),
  _searchTerm: computed('searchTerm', 'service.searchTerm', function() {
    return this._getProperty('searchTerm');
  }),
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
  fabClassNames: computed('_isMiniFab', '_isRightFab', function() {
    var classNames = [];
    if (this.get('_isMiniFab')) {
      classNames.push('smd-header__mini-fab');
      if (this.get('_isRightFab')) {
        classNames.push('smd-header__mini-fab--right');
      }
    } else {
      classNames.push('smd-header__fab');
      if (this.get('_isRightFab')) {
        classNames.push('smd-header__fab--right');
      }
    }
    return classNames.join(' ');
  }),
  searchClassNames: computed('_isMiniFab', function() {
    var classNames = [];
    if (this.get('_isMiniFab')) {
      classNames.push('smd-header__mini-search');
    } else {
      classNames.push('smd-header__search');
    }
    return classNames.join(' ');
  }),
  hasTitle: bool('_title'),
  hasFab: bool('_fabIcon'),
  hasBack: bool('_backIcon'),
  hasToolbarOne: bool('_toolbarIconOne'),
  hasToolbarTwo: bool('_toolbarIconTwo'),
  hasToolbarThree: bool('_toolbarIconThree'),
  hasCoverImageClass: bool('_coverImageClass'),
  hasCoverImageSrc: bool('_coverImageSrc'),
  hasSearch: bool('_searchAction'),
  // Actions
  actions: {
    backAction: function() {
      if (this.get('_backAction')) {
        this.sendAction('_backAction', this);
      } else if (this.get('_action')) {
        this.sendAction('_action', 'back', this);
      }
    },
    fabAction: function() {
      if (this.get('_fabAction')) {
        this.sendAction('_fabAction', this);
      } else if (this.get('_action')) {
        this.sendAction('_action', 'fab', this);
      }
    },
    toolbarActionOne: function() {
      if (this.get('_toolbarActionOne')) {
        this.sendAction('_toolbarActionOne', this);
      } else if (this.get('_action')) {
        this.sendAction('_action', 'toolbarOne', this);
      }
    },
    toolbarActionTwo: function() {
      if (this.get('_toolbarActionTwo')) {
        this.sendAction('_toolbarActionTwo', this);
      } else if (this.get('_action')) {
        this.sendAction('_action', 'toolbarTwo', this);
      }
    },
    toolbarActionThree: function() {
      if (this.get('_toolbarActionThree')) {
        this.sendAction('_toolbarActionThree', this);
      } else if (this.get('_action')) {
        this.sendAction('_action', 'toolbarThree', this);
      }
    },
    searchAction: function(term) {
      this.sendAction('_searchAction', term);
    }
  },
  // Methods
  _getProperty: function(key, def) {
    def = (typeof def !== 'undefined') ? def : null;

    let p = this.get(key) ? this.get(key) : this.get('service.' + key);

    if (p === null) {
      return def;
    }
    return p;
  },
  didInsertElement: function() {
    if (this.get('_scrolling')) {
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
    let selector = this.get('_scrollContext'),
      $page = this.$().parent().find(selector);
    if ($page.length) {
      return $page;
    }
    Ember.Logger.warn('Can not find a sibling element ' + selector + ' for scrollable smd-header');
    return Ember.$('body');
  }
});

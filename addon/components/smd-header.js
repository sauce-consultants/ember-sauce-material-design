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
  hasMenu: false,
  backAction: null,
  menuAction: null,
  fabAction: null,
  toolbarActionOne: null,
  toolbarActionTwo: null,
  toolbarActionThree: null,
  searchAction: false,
  searchTerm: null,
  // Computed
  fabClassModifier: Ember.computed('hasFab', function() {
    if (this.get('hasFab')) {
      if (this.get('isMiniFab')) {
        return 'smd-header--with-mini-fab';
      } else {
        return 'smd-header--with-fab';
      }
    }
  }),
  minimizedClassModifier: Ember.computed('isMinimized', function() {
    if (this.get('isMinimized')) {
      return 'smd-header--minimized';
    }
  }),
  fabClassNames: Ember.computed('isMiniFab', 'isRightFab', function() {
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
  searchClassNames: Ember.computed('isMiniFab', function() {
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
  hasSearch: Ember.computed.bool('searchAction'),
  // actions
  actions: {
    backAction: function() {
      if (this.get('backAction')) {
        this.sendAction('backAction', this.get('item'));
      } else if (this.get('action')) {
        this.sendAction('action', 'back', this.get('item'));
      }
    },
    fabAction: function() {
      if (this.get('fabAction')) {
        this.sendAction('fabAction', this.get('item'));
      } else if (this.get('action')) {
        this.sendAction('action', 'fab', this.get('item'));
      }
    },
    menuAction: function() {
      var $drawer = Ember.$('.mdl-layout__drawer');

      if ($drawer.hasClass('is-visible')) {
        $drawer.removeClass('is-visible');
        $drawer.attr('aria-hidden', false);
      } else {
        $drawer.addClass('is-visible');
        $drawer.attr('aria-hidden', true);
      }
    },
    toolbarActionOne: function() {
      if (this.get('toolbarActionOne')) {
        this.sendAction('toolbarActionOne', this.get('item'));
      } else if (this.get('action')) {
        this.sendAction('action', 'toolbarOne', this.get('item'));
      }
    },
    toolbarActionTwo: function() {
      if (this.get('toolbarActionTwo')) {
        this.sendAction('toolbarActionTwo', this.get('item'));
      } else if (this.get('action')) {
        this.sendAction('action', 'toolbarTwo', this.get('item'));
      }
    },
    toolbarActionThree: function() {
      if (this.get('toolbarActionThree')) {
        this.sendAction('toolbarActionThree', this.get('item'));
      } else if (this.get('action')) {
        this.sendAction('action', 'toolbarThree', this.get('item'));
      }
    },
    searchAction: function(term) {
      this.sendAction('searchAction', term);
    }
  },
  //
  didRender: function() {
    this._super(...arguments);
    //Ember.Logger.log('>>> did render');
    if (this.get('scrolling')) {
      this.initScrollTransition();
    }
  },
  /*
  didInsertElement: function() {
    Ember.Logger.log('>>> didInsertElement');
  },
  didUpdateAttrs: function() {
    Ember.Logger.log('>>> didUpdateAttrs');
  },
  didUpdate: function() {
    Ember.Logger.log('>>> didUpdate');
  },
  */
  /**
   * Cluster fuck of jquery to add sticker header scrolling
   */
  initScrollTransition: function() {

    var $parent = Ember.$(this.get('scrollContext')),
      $header = this.$(),
      //$title = $header.find('.smd-header__title'),
      originalHeight = $header.outerHeight(),
      minHeight = originalHeight - 128;

    //Ember.Logger.log($header);
    //Ember.Logger.log('first scroll ' + $parent.scrollTop());

    // first run
    this.onHeaderScroll($parent, $parent.scrollTop(), originalHeight, minHeight);

    var _this = this;
    $parent.scroll(function() {
      var scroll = Ember.$(this).scrollTop();
      _this.onHeaderScroll($parent, scroll, originalHeight, minHeight);
    });
  },
  /*
   * Sort scroll positiion
   */
  onHeaderScroll: function($parent, scroll, originalHeight, minHeight) {

    //Ember.Logger.log(scroll + ' - ' + originalHeight + ' ' + minHeight);


    //Ember.Logger.log(this.elementId);
    //Ember.Logger.log($header.attr('id'));

    // HACK: need to query the header each time as the component
    // changes each page transition

    var $header = Ember.$('.smd-header'),
      $title = $header.find('.smd-header__title'),
      height = (originalHeight - scroll);

    //Ember.Logger.log('h ' + height);

    if (height < minHeight) {
      // We have scrolled all the way
      // stick the header
      $header.css('height', '');
      $header
        .addClass("smd-header--minimized")
        .addClass("smd-header--fixed")
        .removeClass("smd-header--transition");

      $title.css('transform', '');
      $parent.css('margin-top', minHeight);

    } else if (scroll > 1) {
      // On our way to scrolling the full way
      // header is in transition
      $header.css('height', height);
      $header
        .addClass("smd-header--transition")
        .removeClass("smd-header--minimized")
        .removeClass("smd-header--fixed");

      // title scale factor
      var scale = (height - minHeight) / (originalHeight - minHeight);

      var fact = 0.75 + (0.25 * scale);

      $title.css('transform', 'scale(' + fact + ') translateZ(0px)');

      //Ember.Logger.log('set top margin to ' + height);

      $parent.css('margin-top', height);
    } else {
      // No scroll yet
      // leave the header alone
      $title.css('transform', '');
      $header.css('height', '')
        .removeClass("smd-header--transition")
        .removeClass("smd-header--minimized")
        .removeClass("smd-header--fixed");
      $parent.css('margin-top', '');
    }
  },
});

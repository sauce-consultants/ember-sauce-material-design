import Ember from 'ember';
import layout from '../templates/components/smd-header';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: 'smd-header',
  classNameBindings: ['fabClassModifier', 'minimizedClassModifier'],
  layout,
  title: '',
  backIcon: 'arrow_back',
  actionOneIcon: null,
  actionTwoIcon: null,
  fabIcon: null,
  coverImageClass: null,
  coverImageSrc: null,
  isMiniFab: false,
  isRightFab: false,
  isMinimized: false,
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
  hasActionOne: Ember.computed.bool('actionOneIcon'),
  hasActionTwo: Ember.computed.bool('actionTwoIcon'),
  hasCoverImageClass: Ember.computed.bool('coverImageClass'),
  hasCoverImageSrc: Ember.computed.bool('coverImageSrc'),
});

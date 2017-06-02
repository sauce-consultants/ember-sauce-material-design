import Ember from 'ember';
import layout from '../templates/components/smd-item';

export default Ember.Component.extend({
  // Component setup
  layout,
  tagName: 'div',
  classNames: 'smd-item',
  classNameBindings: [
    'disabledClassModifier',
    'borderClassModifier',
    'noLeftClassModifier',
    'noRightClassModifier',
  ],
  // Attributes
  sections: {
    left: {
      isLeft: true,
    },
    middle: {
      isMiddle: true,
    },
    right: {
      isRight: true,
    },
    top: {
      isTop: true,
    },
    bottom: {
      isBottom: true,
    },
  },
  disabled: false,
  title: null,
  subTitle: null,
  meta: null,
  avatarText: null,
  avatarIcon: null,
  avatarSrc: null,
  actionIcon: null,
  avatarClassModifier: null,
  label: null,
  isRoundedAvatar: true,
  isBordered: false,
  isThreeLines: false,
  isInverted: false,
  item: null,
  // Actions
  action: null,
  secondaryAction: null,
  // Computed
  hasTitle: Ember.computed.bool('title'),
  hasSubTitle: Ember.computed.bool('subTitle'),
  hasMeta: Ember.computed.bool('meta'),
  hasAvatar: Ember.computed.or('avatarText', 'avatarIcon', 'avatarSrc'),
  hasActionOrLabel: Ember.computed.or('actionIcon', 'label'),
  // Class methods
  leftColumnClassNames: Ember.computed('isInverted', function() {
    var classNames = [];
    classNames.push('smd-item__column');
    classNames.push('smd-item__column--left');
    if (this.get('isInverted')) {
      classNames.push('smd-item__column--action');
    } else {
      classNames.push('smd-item__column--avatar');
    }
    return classNames.join(' ');
  }),
  rightColumnClassNames: Ember.computed('isInverted', function() {
    var classNames = [];
    classNames.push('smd-item__column');
    classNames.push('smd-item__column--right');
    if (this.get('isInverted')) {
      classNames.push('smd-item__column--avatar');
    } else {
      classNames.push('smd-item__column--action');
    }
    return classNames.join(' ');
  }),
  titleClassNames: Ember.computed('subTitle', function() {
    var classNames = [];
    classNames.push('smd-item__title');
    if (this.get('subTitle')) {
      classNames.push('smd-item__title--with-subtitle');
    }
    if (!this.get('subTitle') && !this.get('meta')) {
      classNames.push('smd-item__title--solo');
    }
    return classNames.join(' ');
  }),
  metaClassNames: Ember.computed('isThreeLines', 'subTitle', function() {
    var classNames = [];
    classNames.push('smd-item__meta');
    if (this.get('isThreeLines')) {
      classNames.push('smd-item__meta--two-lines');
    }
    if (this.get('subTitle')) {
      classNames.push('smd-item__meta--with-subtitle');
    }
    return classNames.join(' ');
  }),
  disabledClassModifier: Ember.computed('disabled',function() {
    if(this.get('disabled')) {
      return 'smd-item--disabled';
    }
  }),
  borderClassModifier: Ember.computed('isBordered', function() {
    if (this.get('isBordered')) {
      return 'smd-item--border';
    }
  }),
  noLeftClassModifier: Ember.computed('isInverted', 'hasActionOrLabel', 'hasAvatar', function() {
    if (this.get('isInverted')) {
      if (!this.get('hasActionOrLabel')) {
        return 'smd-item--no-left';
      }
    } else {
      if (!this.get('hasAvatar')) {
        return 'smd-item--no-left';
      }
    }
  }),
  noRightClassModifier: Ember.computed('isInverted', 'hasActionOrLabel', 'hasAvatar', function() {
    if (this.get('isInverted')) {
      if (!this.get('hasAvatar')) {
        return 'smd-item--no-right';
      }
    } else {
      if (!this.get('hasActionOrLabel')) {
        return 'smd-item--no-right';
      }
    }
  }),
  // Events
  click: function() {
    if (this.get('action') && !this.get('disabled')) {
      this.sendAction('action', this.get('item'));
    }
  },
  actions: {
    secondaryAction: function() {
      if (this.get('secondaryAction')) {
        this.sendAction('secondaryAction', this.get('item'));
      }
    }
  }
});

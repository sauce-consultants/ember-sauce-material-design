import Ember from 'ember';

const {
  Mixin
} = Ember;

export default Mixin.create({
  badge: null,
  noBadgeBackground: false,
  badgeOverlap: false,
  attributeBindings: [
    'badge:data-badge'
  ],
  classNameBindings: [
    'badge:mdl-badge',
    'noBadgeBackground:mdl-badge--no-background',
    'badgeOverlap:mdl-badge--overlap',
  ],
});

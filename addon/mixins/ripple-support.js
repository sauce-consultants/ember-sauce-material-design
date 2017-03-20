import Ember from 'ember';

const {
  Mixin,
  computed,
  observer
} = Ember;

export default Mixin.create({
  hasRipples: true,
  _rippleClass: computed('_baseClass', function() {
    return `${this.get('_baseClass')}__ripple-container`;
  }),
  classNameBindings: ['hasRipples:mdl-js-ripple-effect'],

  _mdlComponentObserver: observer('_mdlComponent', function() {
    if (this.get('hasRipples')) {
      let mdlripples = new window.MaterialRipple(this.$(`.${this.get('_rippleClass')}`)[0]);
      this.set('_mdlRippleComponent', mdlripples);
    }
  })
});

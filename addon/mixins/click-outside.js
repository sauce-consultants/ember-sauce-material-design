import Ember from 'ember';
import $ from 'jquery';

const {
  computed
} = Ember;
const bound = function(fnName) {
  return computed(fnName, function() {
    return this.get(fnName).bind(this);
  });
};

export default Ember.Mixin.create({
  clickOutsideSelector: null,
  clickOutside() {},
  clickHandler: bound('outsideClickHandler'),

  outsideClickHandler(e) {
    let element = this.get('element');
    const clickOutsideSelector = this.get('clickOutsideSelector');
    if(clickOutsideSelector)
    {
      element = element.querySelector(clickOutsideSelector);
    }
    const $target = $(e.target);
    const isInside = $target.closest(element).length === 1;
    const toggleButtonClass = this.get('toggleButtonClass');
    const isToggleButton = $target[0].className === toggleButtonClass || $target[0].parentNode.className === toggleButtonClass;

    if (!isInside && !isToggleButton) {
      this.clickOutside(e);
    }
  },

  addClickOutsideListener() {
    const clickHandler = this.get('clickHandler');
    $(window).on('click', clickHandler);
  },

  removeClickOutsideListener() {
    const clickHandler = this.get('clickHandler');
    $(window).off('click', clickHandler);
  }
});

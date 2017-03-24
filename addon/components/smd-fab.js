import Ember from 'ember';
import Button from '../components/smd-button';
import layout from '../templates/components/smd-button';

const {
    Component,
    computed,
    computed:{alias},
    inject:{service},
} = Ember;

export default Button.extend({
  // Services
  service: service('smd-fab-service'),
  // Attributes
  layout,
  classNames:["smd-fab"],
  classNameBindings:[
    "alignClass",
    "isMiniFab:smd-fab--mini",
    "isHidden:smd-fab--hidden",
  ],
  isFab: true,
  // Computed
  action:alias("service.action"),
  icon:alias("service.icon"),
  align:alias("service.align"),
  isHidden:alias("service.isHidden"),
  isMiniFab:alias("service.isSmall"),
  isAccent:alias("service.isAccent"),
  isPrimary:alias("service.isPrimary"),
  disabled:alias("service.disabled"),
  alignClass:computed("align", function () {
    if (this.get("align") === "right") {
      return "smd-fab--right";
    }
    if (this.get("align") === "left") {
      return "smd-fab--left";
    }
  }),
});

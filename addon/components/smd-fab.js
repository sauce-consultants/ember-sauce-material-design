import Ember from 'ember';
import layout from '../templates/components/smd-fab';

const {
    Component,
    computed,
    computed:{alias},
    inject:{service},
} = Ember;

export default Component.extend({
  // Services
  service: service('smd-fab-service'),
  // Attributes
  layout,
  classNames:["smd-fab"],
  classNameBindings:[
    "alignClass",
    "isSmall:smd-fab--small",
    "isHidden:smd-fab--hidden",
  ],
  // Computed
  action:alias("service.action"),
  icon:alias("service.icon"),
  align:alias("service.align"),
  isHidden:alias("service.isHidden"),
  isSmall:alias("service.isSmall"),
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
  // Actions
  actions: {
    fabAction: function () {
      this.sendAction("action");
    },
  },
});

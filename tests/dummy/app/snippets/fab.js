// BEGIN-SNIPPET smd-fab-route
import Ember from 'ember';
import FabableRoute from 'ember-sauce-material-design/mixins/smd-fabable-route';

const {
  Route
} = Ember;

export default Route.extend(FabableRoute, {
  // Fab Attributes
  fabIcon:"add",
  fabAlign: "right",
  fabIsSmall:false,
  fabIsAccent:false,
  fabIsPrimary:true,
  fabDisabled:false,
  fabIsHidden:false,
  // Actions
  actions: {
    toggleFabAlign: function () {
      if (this.get("fab.align") === "right") {
        this.set("fab.align", "left");
      } else {
        this.set("fab.align", "right");
      }
    },
    toggleFabSize: function () {
      if (this.get("fab.isSmall")) {
        this.set("fab.isSmall", false);
      } else {
        this.set("fab.isSmall", true);
      }
    },
    toggleFabDisable: function () {
      if (this.get("fab.disabled")) {
        this.set("fab.disabled", false);
      } else {
        this.set("fab.disabled", true);
      }
    },
    toggleFabType: function () {
      if (this.get("fab.isPrimary")) {
        this.set("fab.isPrimary", false);
        this.set("fab.isAccent", true);
      } else if (this.get("fab.isAccent")) {
        this.set("fab.isPrimary", false);
        this.set("fab.isAccent", false);
      } else {
        this.set("fab.isPrimary", true);
        this.set("fab.isAccent", false);
      }
    },
    fabAction: function (/* fab */) {
      window.alert("Fab Fired!");
    },
  },
});

// END-SNIPPET

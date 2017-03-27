import Ember from 'ember';

const {
  Mixin,
  inject: {
    service
  },
} = Ember;

export default Mixin.create({
  // Services
  fab: service("smd-fab-service"),
  // Attributes
  fabIcon: "add",
  fabAlign: "right",
  fabIsSmall: false,
  fabIsAccent: false,
  fabIsPrimary: true,
  fabDisabled: false,
  fabIsHidden: false,
  fabAction: "fabAction",
  // Methods
  activate: function() {
    this._super();
    this.get("fab").setup({
      icon: this.get("fabIcon"),
      align: this.get("fabAlign"),
      isSmall: this.get("fabIsSmall"),
      isAccent: this.get("fabIsAccent"),
      isPrimary: this.get("fabIsPrimary"),
      disabled: this.get("fabDisabled"),
      isHidden: this.get("fabIsHidden"),
      action: this.get("fabAction"),
    });
  },
  deactivate: function() {
    this._super();
    this.get("fab").clear();
  },
});

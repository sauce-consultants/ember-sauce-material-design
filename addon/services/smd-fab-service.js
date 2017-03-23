import Ember from 'ember';

const {
  copy,
  merge,
  Service,
} = Ember;

export default Service.extend({
  icon:null,
  align: null,
  isHidden:null,
  isSmall:null,
  isAccent:null,
  isPrimary:null,
  disabled:null,
  action:null,
  // Methods
  clear: function() {
    let defaults = copy(this.get('_defaults'));
    Object.keys(defaults).forEach(
      (key) => {
        this.set(key, defaults[key]);
      }
    );
  },
  setup: function(hash) {
    let defaults = copy(this.get('_defaults'));
    merge(defaults, hash)
    Object.keys(defaults).forEach(
      (key) => {
        this.set(key, defaults[key]);
      }
    );
  },
  // Private Attributes
  _defaults: {
    icon:"add",
    align: "right",
    isHidden:true,
    isSmall:false,
    isAccent:false,
    isPrimary:true,
    disabled:false,
    action:"fabAction",
  },
});

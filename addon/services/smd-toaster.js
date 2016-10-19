import Ember from "ember";

export default Ember.Service.extend({
  message: null,
  setMessage(text) {
    this.set('message', text);

    var data = {
      message: this.get('message'),
      timeout: 2000
    };
    Ember.$('.mdl-snackbar').get(0).MaterialSnackbar.showSnackbar(data);
  },
  getMessage() {
    return this.get('message');
  }
});

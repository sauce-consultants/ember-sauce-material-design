import Ember from "ember";

export default Ember.Service.extend({
  message: null,
  _extraClass: null,
  setMessage(text,options={},newExtraClass=null) {

    this.set('message', text);

    let snackbarElement = Ember.$('.mdl-snackbar');

    let currentExtraClass = this.get('_extraClass');
    if(currentExtraClass)
    {
      snackbarElement.removeClass(currentExtraClass);
    }
    if(newExtraClass)
    {
      snackbarElement.addClass(newExtraClass);
    }

    var data = {
      message: this.get('message'),
      timeout: 2000
    };
    Ember.merge(data,options);

    snackbarElement.get(0).MaterialSnackbar.showSnackbar(data);
  },
  getMessage() {
    return this.get('message');
  }
});

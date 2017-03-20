import Ember from 'ember';

const {
  Service,
  $
} = Ember;

export default Service.extend({
  alerts: Ember.A([]),
  registerAlert: function(id) {
    if (this.getAlert(id) === null) {
      Ember.Logger.info('Alert already registered with id=' + id);
    } else {
      this.get('alerts').push(
        Ember.Object.create({
          id: id,
          visible: false,
        })
      );
    }
  },
  showAlert: function(id) {
    let alert = this.getAlert(id);
    alert.set('visible', true);
    $('#' + alert.get('id'))[0].showModal();
  },
  hideAlert: function(id) {
    let alert = this.getAlert(id);
    alert.set('visible', false);
    $('#' + alert.get('id'))[0].close();
  },
  getAlert: function(id) {
    let results = this.get('alerts').filterBy('id', id);
    if (results.length > 0) {
      return results[0];
    }
  },
});

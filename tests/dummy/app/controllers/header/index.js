import Ember from 'ember';
const {
  Controller
} = Ember;

export default Controller.extend({
  toolbarOptions: [{
    text: 'Item One',
    value: 'one'
  }, {
    text: 'Item Two',
    value: 'two'
  }, {
    text: 'Item Three',
    value: 'three'
  }, ],
});

import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  _createDummyObject: function(identifier) {
    return Ember.Object.create({someProperty: "Some value #" + identifier});
  },
  model(){

    let dummyItems = Ember.A();
    for(var i = 0; i < 5; i++)
    {
      let dummyObject = this._createDummyObject(i);
      dummyItems.addObject(dummyObject);
    }

    console.log("Dummy items");
    console.log(dummyItems);
    return dummyItems;
  },
  actions: {
    addDummyItem: function() {
      this.currentModel.addObject(this._createDummyObject("new"));
    },
    removeDummyItem: function(itemToRemove) {
      this.currentModel.removeObject(itemToRemove);
    }
  }
});

import Ember from 'ember';

const {
  A,
  Route,
  RSVP
} = Ember;

export default Route.extend({
  model() {

    var animalOptions = A();

    animalOptions.push(this.store.createRecord('animal', {
      id: 1,
      name: 'Dog'
    }));
    animalOptions.push(this.store.createRecord('animal', {
      id: 2,
      name: 'Cat'
    }));
    animalOptions.push(this.store.createRecord('animal', {
      id: 3,
      name: 'Fish'
    }));
    animalOptions.push(this.store.createRecord('animal', {
      id: 4,
      name: 'Bear'
    }));
    animalOptions.push(this.store.createRecord('animal', {
      id: 5,
      name: 'Rabbit'
    }));
    animalOptions.push(this.store.createRecord('animal', {
      id: 6,
      name: 'Tiger'
    }));
    animalOptions.push(this.store.createRecord('animal', {
      id: 7,
      name: 'Chicken'
    }));
    animalOptions.push(this.store.createRecord('animal', {
      id: 8,
      name: 'Elephant'
    }));

    let colorOptions = A([
        'Red',
        'Green',
        'Blue',
        'Yellow',
      ]),
      numberOptions = A([{
        label: 'One',
        value: 1,
      }, {
        label: 'Two',
        value: 2,
      }, {
        label: 'Three',
        value: 3,
      }, {
        label: 'Four',
        value: 4,
      }, {
        label: 'Five',
        value: 5,
      }, {
        label: 'Six',
        value: 6,
      }, {
        label: 'Seven',
        value: 7,
      }, {
        label: 'Fourty Two',
        value: 42,
      }]);

    return {
      colorOptions: colorOptions,
      numberOptions: numberOptions,
      animalOptions: animalOptions,
      user: this.store.createRecord('user'),
    };
  },
  actions: {

  },
});

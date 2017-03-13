import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model: function() {
    return [{
        title: 'Item One',
        avatar: "http://i.pravatar.cc/80?r=1",
      },
      {
        title: 'Item Two',
        avatar: "http://i.pravatar.cc/80?r=2",
      },
      {
        title: 'Item Three',
        avatar: "http://i.pravatar.cc/80?r=3",
      },
      {
        title: 'Item Four',
        avatar: "http://i.pravatar.cc/80?r=4",
      },
      {
        title: 'Item Five',
        avatar: "http://i.pravatar.cc/80?r=5",
      },
      {
        title: 'Item Six',
        avatar: "http://i.pravatar.cc/80?r=6",
      },
      {
        title: 'Item Seven',
        avatar: "http://i.pravatar.cc/80?r=7",
      },
    ];
  },
});

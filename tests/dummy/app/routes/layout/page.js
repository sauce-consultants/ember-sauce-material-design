import Ember from "ember";

const {
  Route,
  inject: {
    service
  },
} = Ember;

export default Route.extend({
  header: service("smd-header-service"),
  activate: function() {
    let hash = {
      title: "Page Layout",
      backIcon: "arrow_back",
      backAction: "back",
      scrolling: true,
      scrollContext: ".smd-liquid--scroll"
    };
    this.get("header").setup(hash);
  },
});

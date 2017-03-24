import {
  moduleForComponent,
  test
} from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import Ember from "ember";

const {
  Service
} = Ember;

const FabServiceStub = Service.extend({
  icon: "add",
  align: "right",
  isHidden: true,
  isSmall: false,
  isAccent: false,
  isPrimary: true,
  disabled: false,
  action: "fabAction",
});

moduleForComponent("smd-fab", "Integration | Component | smd fab", {
  integration: true,
  beforeEach: function() {
    this.register("service:smd-fab-service", FabServiceStub);
    this.inject.service("smd-fab-service", {
      as: "fabService"
    });
  }

});

test("it renders with defaults", function(assert) {

  assert.expect(8);

  this.on("fabAction", function(fab) {
    assert.ok(fab.element.className.indexOf('this-is-my-fab') >= 0, 'Fab button component is passed as argument to action');
  });

  this.render(hbs `{{smd-fab class="this-is-my-fab"}}`);

  let $fab = this.$(".smd-fab");

  assert.equal($fab.text().trim(), "add", "Has correct icon name");
  assert.equal($fab.hasClass("mdl-button--primary"), true, "Has primary class");
  assert.equal($fab.hasClass("mdl-button--accent"), false, "Does not have accent class");
  assert.equal($fab.hasClass("smd-fab--right"), true, "Has right align class");
  assert.equal($fab.hasClass("smd-fab--left"), false, "Does not have left align class");
  assert.equal($fab.hasClass("smd-fab--mini"), false, "Does not have mini class");
  assert.equal($fab.hasClass("smd-fab--hidden"), true, "Has hidden class");

  $fab.click();

});

test("it renders with custom setup", function(assert) {

  assert.expect(8);

  this.fabService.set("icon", "delete");
  this.fabService.set("action", "myAction");
  this.fabService.set("align", "left");
  this.fabService.set("isSmall", true);
  this.fabService.set("isPrimary", false);
  this.fabService.set("isAccent", true);
  this.fabService.set("isHidden", false);

  this.on("myAction", function(fab) {
    assert.ok(fab.element.className.indexOf('this-is-my-fab') >= 0, 'Fab button component is passed as argument to action');
  });

  this.render(hbs `{{smd-fab class="this-is-my-fab"}}`);

  let $fab = this.$(".smd-fab");

  assert.equal($fab.text().trim(), "delete", "Has correct icon name");
  assert.equal($fab.hasClass("mdl-button--primary"), false, "Has primary class");
  assert.equal($fab.hasClass("mdl-button--accent"), true, "Does not have accent class");
  assert.equal($fab.hasClass("smd-fab--right"), false, "Does not have right align class");
  assert.equal($fab.hasClass("smd-fab--left"), true, "Has left align class");
  assert.equal($fab.hasClass("smd-fab--mini"), true, "Has mini class");
  assert.equal($fab.hasClass("smd-fab--hidden"), false, "Does not have hidden class");

  $fab.click();

});

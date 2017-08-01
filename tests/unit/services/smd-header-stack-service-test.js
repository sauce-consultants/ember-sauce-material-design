import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:smd-header-stack-service', 'Unit | Service | smd header stack service', {
  // Specify the other units that are required for this test.
  needs: []
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it returns empty hash if stack is empty', function(assert) {
  let service = this.subject();
  service.clear();

  let hash = service.getHash();

  assert.equal(hash.toolbarIconOne, null, 'toolbarIconOne is correct');
  assert.equal(hash.toolbarIconTwo, null, 'toolbarIconTwo is correct');
  assert.equal(hash.toolbarIconThree, null, 'toolbarIconThree is correct');
});

test('it merges properties correctly when all present', function(assert) {
  let service = this.subject();
  service.clear();

  service.push({
    toolbarIconOne: 'foo1',
    toolbarIconTwo: 'foo2',
    toolbarIconThree: 'foo3',
  });
  service.push({
    toolbarIconOne: 'bar1',
    toolbarIconTwo: 'bar2',
    toolbarIconThree: 'bar3',
  });

  let hash = service.getHash();

  assert.equal(hash.toolbarIconOne, 'bar1', 'toolbarIconOne is correct');
  assert.equal(hash.toolbarIconTwo, 'bar2', 'toolbarIconTwo is correct');
  assert.equal(hash.toolbarIconThree, 'bar3', 'toolbarIconThree is correct');
});


test('it returns correct hash with one object on the stack', function(assert) {
  let service = this.subject();
  service.clear();

  service.push({
    toolbarIconOne: 'foo1',
    toolbarIconTwo: 'foo2',
  });

  let hash = service.getHash();

  assert.equal(hash.toolbarIconOne, 'foo1', 'toolbarIconOne is correct');
  assert.equal(hash.toolbarIconTwo, 'foo2', 'toolbarIconTwo is correct');
  assert.equal(hash.toolbarIconThree, null, 'toolbarIconThree is correct');
});

test('it merges properties correctly when some properties are missing or undefined', function(assert) {
  let service = this.subject();
  service.clear();

  service.push({
    toolbarIconOne: 'foo1',
    toolbarIconTwo: 'foo2',
    toolbarIconThree: 'foo3',
  });

  service.push({
    toolbarIconOne: 'bar1',
  });

  let hash = service.getHash();

  assert.equal(hash.toolbarIconOne, 'bar1', 'toolbarIconOne is correct');
  assert.equal(hash.toolbarIconTwo, 'foo2', 'toolbarIconTwo is correct');
  assert.equal(hash.toolbarIconThree, 'foo3', 'toolbarIconThree is correct');
});

test('it merges properties correctly when some properties are null', function(assert) {
  let service = this.subject();
  service.clear();

  service.push({
    toolbarIconOne: 'foo1',
    toolbarIconTwo: 'foo2',
    toolbarIconThree: 'foo3',
  });
  service.push({
    toolbarIconOne: 'bar1',
    toolbarIconTwo: null,
  });

  let hash = service.getHash();

  assert.equal(hash.toolbarIconOne, 'bar1', 'toolbarIconOne is correct');
  assert.equal(hash.toolbarIconTwo, null, 'toolbarIconTwo is correct');
  assert.equal(hash.toolbarIconThree, 'foo3', 'toolbarIconThree is correct');
});

test('it returns the correct hash after simple hash is popped', function(assert) {
  let service = this.subject();
  service.clear();

  service.push({
    toolbarIconOne: 'foo1',
    toolbarIconTwo: 'foo2',
    toolbarIconThree: 'foo3',
  });
  service.push({
    toolbarIconOne: 'bar1',
    toolbarIconTwo: 'bar2',
    toolbarIconThree: 'bar3',
  });

  service.pop();

  let hash = service.getHash();

  assert.equal(hash.toolbarIconOne, 'foo1', 'toolbarIconOne is correct');
  assert.equal(hash.toolbarIconTwo, 'foo2', 'toolbarIconTwo is correct');
  assert.equal(hash.toolbarIconThree, 'foo3', 'toolbarIconThree is correct');
});

test('it returns the correct hash after an item is popped', function(assert) {
  let service = this.subject();
  service.clear();

  service.push({
    toolbarIconOne: 'foo1',
    toolbarIconTwo: 'foo2',
    toolbarIconThree: 'foo3',
  });
  service.push({
    toolbarIconOne: 'bar1',
    toolbarIconTwo: null,
  });
  service.push({
    toolbarIconOne: null,
    toolbarIconThree: 'boop'
  });

  service.pop();

  let hash = service.getHash();

  assert.equal(hash.toolbarIconOne, 'bar1', 'toolbarIconOne is correct');
  assert.equal(hash.toolbarIconTwo, null, 'toolbarIconTwo is correct');
  assert.equal(hash.toolbarIconThree, 'foo3', 'toolbarIconThree is correct');
});

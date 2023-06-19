import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-e-m-s-participant', 'Unit | Model | i-i-s-e-m-s-participant', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-e-m-s-event',
    'model:i-i-s-e-m-s-lessor',
    'model:i-i-s-e-m-s-organizer',
    'model:i-i-s-e-m-s-participant',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

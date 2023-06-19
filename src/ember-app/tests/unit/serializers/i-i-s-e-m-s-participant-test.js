import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-e-m-s-participant', 'Unit | Serializer | i-i-s-e-m-s-participant', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-e-m-s-participant',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

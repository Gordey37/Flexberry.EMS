import { Serializer as ParticipantSerializer } from
  '../mixins/regenerated/serializers/i-i-s-e-m-s-participant';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ParticipantSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

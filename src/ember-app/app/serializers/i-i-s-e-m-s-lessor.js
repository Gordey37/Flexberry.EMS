import { Serializer as LessorSerializer } from
  '../mixins/regenerated/serializers/i-i-s-e-m-s-lessor';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LessorSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

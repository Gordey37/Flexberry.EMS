import { Serializer as OrganizerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-e-m-s-organizer';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OrganizerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

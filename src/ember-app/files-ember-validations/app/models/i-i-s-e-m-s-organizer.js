import {
  defineNamespace,
  defineProjections,
  Model as OrganizerMixin
} from '../mixins/regenerated/models/i-i-s-e-m-s-organizer';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(OrganizerMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

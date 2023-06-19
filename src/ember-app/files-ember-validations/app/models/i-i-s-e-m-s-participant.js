import {
  defineNamespace,
  defineProjections,
  Model as ParticipantMixin
} from '../mixins/regenerated/models/i-i-s-e-m-s-participant';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ParticipantMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

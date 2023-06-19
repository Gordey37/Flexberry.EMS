import {
  defineNamespace,
  defineProjections,
  Model as EventMixin
} from '../mixins/regenerated/models/i-i-s-e-m-s-event';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(EventMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

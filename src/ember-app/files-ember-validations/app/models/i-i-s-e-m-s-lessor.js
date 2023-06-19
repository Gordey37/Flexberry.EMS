import {
  defineNamespace,
  defineProjections,
  Model as LessorMixin
} from '../mixins/regenerated/models/i-i-s-e-m-s-lessor';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(LessorMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as EventMixin
} from '../mixins/regenerated/models/i-i-s-e-m-s-event';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(EventMixin, Validations, {
});

defineProjections(Model);

export default Model;

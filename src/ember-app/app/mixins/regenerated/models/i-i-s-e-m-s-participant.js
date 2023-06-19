import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  mail: DS.attr('string'),
  name: DS.attr('string'),
  password: DS.attr('string'),
  phoneNumber: DS.attr('decimal'),
  event: DS.belongsTo('i-i-s-e-m-s-event', { inverse: null, async: false })
});

export let ValidationRules = {
  mail: {
    descriptionKey: 'models.i-i-s-e-m-s-participant.validations.mail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-e-m-s-participant.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  password: {
    descriptionKey: 'models.i-i-s-e-m-s-participant.validations.password.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phoneNumber: {
    descriptionKey: 'models.i-i-s-e-m-s-participant.validations.phoneNumber.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  event: {
    descriptionKey: 'models.i-i-s-e-m-s-participant.validations.event.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ParticipantE', 'i-i-s-e-m-s-participant', {
    name: attr('Имя', { index: 0 }),
    mail: attr('Почта', { index: 1 }),
    phoneNumber: attr('Телефонный номер', { index: 2 }),
    password: attr('Пароль', { index: 3 }),
    event: belongsTo('i-i-s-e-m-s-event', 'Мероприятие', {
      name: attr('Название мероприятия', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ParticipantL', 'i-i-s-e-m-s-participant', {
    name: attr('Имя', { index: 0 }),
    mail: attr('Почта', { index: 1 }),
    phoneNumber: attr('Телефонный номер', { index: 2 }),
    password: attr('Пароль', { index: 3 }),
    event: belongsTo('i-i-s-e-m-s-event', 'Название мероприятия', {
      name: attr('Название мероприятия', { index: 4 })
    }, { index: -1, hidden: true })
  });
};

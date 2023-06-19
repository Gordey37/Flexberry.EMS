import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  availableItems: DS.attr('string'),
  availableRooms: DS.attr('string'),
  mail: DS.attr('string'),
  name: DS.attr('string'),
  password: DS.attr('string'),
  phoneNumber: DS.attr('decimal'),
  event: DS.belongsTo('i-i-s-e-m-s-event', { inverse: null, async: false })
});

export let ValidationRules = {
  availableItems: {
    descriptionKey: 'models.i-i-s-e-m-s-lessor.validations.availableItems.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  availableRooms: {
    descriptionKey: 'models.i-i-s-e-m-s-lessor.validations.availableRooms.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  mail: {
    descriptionKey: 'models.i-i-s-e-m-s-lessor.validations.mail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-e-m-s-lessor.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  password: {
    descriptionKey: 'models.i-i-s-e-m-s-lessor.validations.password.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phoneNumber: {
    descriptionKey: 'models.i-i-s-e-m-s-lessor.validations.phoneNumber.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  event: {
    descriptionKey: 'models.i-i-s-e-m-s-lessor.validations.event.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('LessorE', 'i-i-s-e-m-s-lessor', {
    name: attr('Имя', { index: 0 }),
    mail: attr('Почта', { index: 1 }),
    availableItems: attr('Доступные предметы', { index: 2 }),
    phoneNumber: attr('Телефонный номер', { index: 3 }),
    availableRooms: attr('Доступные помещения', { index: 4 }),
    password: attr('Пароль', { index: 5 }),
    event: belongsTo('i-i-s-e-m-s-event', 'Мероприятие', {
      name: attr('Имя меропрития', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('LessorL', 'i-i-s-e-m-s-lessor', {
    name: attr('Имя', { index: 0 }),
    mail: attr('Почта', { index: 1 }),
    availableItems: attr('Доступные предметы', { index: 2 }),
    phoneNumber: attr('Телефонный номер', { index: 3 }),
    availableRooms: attr('Доступные помещения', { index: 4 }),
    password: attr('Пароль', { index: 5 }),
    event: belongsTo('i-i-s-e-m-s-event', 'Имя мероприятия', {
      name: attr('Имя мероприятия', { index: 6 })
    }, { index: -1, hidden: true })
  });
};

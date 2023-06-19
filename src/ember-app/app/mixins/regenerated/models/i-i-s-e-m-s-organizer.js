import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  eventHost: DS.attr('string'),
  eventPlan: DS.attr('string'),
  mail: DS.attr('string'),
  name: DS.attr('string'),
  password: DS.attr('string'),
  phoneNumber: DS.attr('decimal')
});

export let ValidationRules = {
  eventHost: {
    descriptionKey: 'models.i-i-s-e-m-s-organizer.validations.eventHost.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  eventPlan: {
    descriptionKey: 'models.i-i-s-e-m-s-organizer.validations.eventPlan.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  mail: {
    descriptionKey: 'models.i-i-s-e-m-s-organizer.validations.mail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-e-m-s-organizer.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  password: {
    descriptionKey: 'models.i-i-s-e-m-s-organizer.validations.password.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phoneNumber: {
    descriptionKey: 'models.i-i-s-e-m-s-organizer.validations.phoneNumber.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OrganizerE', 'i-i-s-e-m-s-organizer', {
    name: attr('Имя', { index: 0 }),
    phoneNumber: attr('Телефонный номер', { index: 1 }),
    eventHost: attr('Организуемое мероприятие', { index: 2 }),
    mail: attr('Почта', { index: 3 }),
    eventPlan: attr('План мероприятия', { index: 4 }),
    password: attr('Пароль', { index: 5 })
  });

  modelClass.defineProjection('OrganizerL', 'i-i-s-e-m-s-organizer', {
    name: attr('Имя', { index: 0 }),
    phoneNumber: attr('Телефонный номер', { index: 1 }),
    eventHost: attr('Организуемое мероприятие', { index: 2 }),
    mail: attr('Почта', { index: 3 }),
    eventPlan: attr('План мероприятия', { index: 4 }),
    password: attr('Пароль', { index: 5 })
  });
};

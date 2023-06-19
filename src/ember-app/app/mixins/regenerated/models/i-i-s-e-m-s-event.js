import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  eventEndDate: DS.attr('date'),
  eventStartDate: DS.attr('date'),
  maxNumberOfParticipants: DS.attr('number'),
  name: DS.attr('string'),
  place: DS.attr('string'),
  ticketPrice: DS.attr('number'),
  organizer: DS.belongsTo('i-i-s-e-m-s-organizer', { inverse: null, async: false })
});

export let ValidationRules = {
  eventEndDate: {
    descriptionKey: 'models.i-i-s-e-m-s-event.validations.eventEndDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  eventStartDate: {
    descriptionKey: 'models.i-i-s-e-m-s-event.validations.eventStartDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  maxNumberOfParticipants: {
    descriptionKey: 'models.i-i-s-e-m-s-event.validations.maxNumberOfParticipants.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-e-m-s-event.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  place: {
    descriptionKey: 'models.i-i-s-e-m-s-event.validations.place.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ticketPrice: {
    descriptionKey: 'models.i-i-s-e-m-s-event.validations.ticketPrice.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  organizer: {
    descriptionKey: 'models.i-i-s-e-m-s-event.validations.organizer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EventE', 'i-i-s-e-m-s-event', {
    name: attr('Название', { index: 0 }),
    eventStartDate: attr('Дата начала', { index: 1 }),
    eventEndDate: attr('Дата окончания', { index: 2 }),
    place: attr('Место', { index: 3 }),
    maxNumberOfParticipants: attr('Макс. число участников', { index: 4 }),
    ticketPrice: attr('Цена билета', { index: 5 }),
    organizer: belongsTo('i-i-s-e-m-s-organizer', 'Организатор', {
      name: attr('Имя организатора', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('EventL', 'i-i-s-e-m-s-event', {
    name: attr('Name', { index: 0 }),
    eventStartDate: attr('Дата начала', { index: 1 }),
    eventEndDate: attr('Дата окончания', { index: 2 }),
    place: attr('Место', { index: 3 }),
    maxNumberOfParticipants: attr('Макс. число участников', { index: 4 }),
    ticketPrice: attr('Цена билета', { index: 5 }),
    organizer: belongsTo('i-i-s-e-m-s-organizer', 'Имя организатора', {
      name: attr('Имя организатора', { index: 6 })
    }, { index: -1, hidden: true })
  });
};

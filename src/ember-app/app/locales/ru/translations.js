import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISEMSEventLForm from './forms/i-i-s-e-m-s-event-l';
import IISEMSLessorLForm from './forms/i-i-s-e-m-s-lessor-l';
import IISEMSOrganizerLForm from './forms/i-i-s-e-m-s-organizer-l';
import IISEMSParticipantLForm from './forms/i-i-s-e-m-s-participant-l';
import IISEMSEventEForm from './forms/i-i-s-e-m-s-event-e';
import IISEMSLessorEForm from './forms/i-i-s-e-m-s-lessor-e';
import IISEMSOrganizerEForm from './forms/i-i-s-e-m-s-organizer-e';
import IISEMSParticipantEForm from './forms/i-i-s-e-m-s-participant-e';
import IISEMSEventModel from './models/i-i-s-e-m-s-event';
import IISEMSLessorModel from './models/i-i-s-e-m-s-lessor';
import IISEMSOrganizerModel from './models/i-i-s-e-m-s-organizer';
import IISEMSParticipantModel from './models/i-i-s-e-m-s-participant';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-e-m-s-event': IISEMSEventModel,
    'i-i-s-e-m-s-lessor': IISEMSLessorModel,
    'i-i-s-e-m-s-organizer': IISEMSOrganizerModel,
    'i-i-s-e-m-s-participant': IISEMSParticipantModel
  },

  'application-name': 'EMS',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'EMS',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'EMS',
          title: 'EMS'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'event-management-system': {
          caption: 'Event Management System',
          title: 'Event Management System',
          'i-i-s-e-m-s-organizer-l': {
            caption: 'Организаторы',
            title: ''
          },
          'i-i-s-e-m-s-lessor-l': {
            caption: 'Арендодатели',
            title: ''
          },
          'i-i-s-e-m-s-event-l': {
            caption: 'Мероприятия',
            title: ''
          },
          'i-i-s-e-m-s-participant-l': {
            caption: 'Участники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-e-m-s-event-l': IISEMSEventLForm,
    'i-i-s-e-m-s-lessor-l': IISEMSLessorLForm,
    'i-i-s-e-m-s-organizer-l': IISEMSOrganizerLForm,
    'i-i-s-e-m-s-participant-l': IISEMSParticipantLForm,
    'i-i-s-e-m-s-event-e': IISEMSEventEForm,
    'i-i-s-e-m-s-lessor-e': IISEMSLessorEForm,
    'i-i-s-e-m-s-organizer-e': IISEMSOrganizerEForm,
    'i-i-s-e-m-s-participant-e': IISEMSParticipantEForm
  },

});

export default translations;

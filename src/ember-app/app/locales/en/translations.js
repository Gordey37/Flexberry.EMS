import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'EMS',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'EMS',
          title: 'EMS'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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

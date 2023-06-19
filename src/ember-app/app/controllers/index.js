import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.event-management-system.caption'),
          title: i18n.t('forms.application.sitemap.event-management-system.title'),
          children: [{
            link: 'i-i-s-e-m-s-organizer-l',
            caption: i18n.t('forms.application.sitemap.event-management-system.i-i-s-e-m-s-organizer-l.caption'),
            title: i18n.t('forms.application.sitemap.event-management-system.i-i-s-e-m-s-organizer-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-e-m-s-lessor-l',
            caption: i18n.t('forms.application.sitemap.event-management-system.i-i-s-e-m-s-lessor-l.caption'),
            title: i18n.t('forms.application.sitemap.event-management-system.i-i-s-e-m-s-lessor-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-e-m-s-event-l',
            caption: i18n.t('forms.application.sitemap.event-management-system.i-i-s-e-m-s-event-l.caption'),
            title: i18n.t('forms.application.sitemap.event-management-system.i-i-s-e-m-s-event-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-e-m-s-participant-l',
            caption: i18n.t('forms.application.sitemap.event-management-system.i-i-s-e-m-s-participant-l.caption'),
            title: i18n.t('forms.application.sitemap.event-management-system.i-i-s-e-m-s-participant-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})
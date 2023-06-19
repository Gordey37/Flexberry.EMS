import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-e-m-s-event-l');
  this.route('i-i-s-e-m-s-event-e',
  { path: 'i-i-s-e-m-s-event-e/:id' });
  this.route('i-i-s-e-m-s-event-e.new',
  { path: 'i-i-s-e-m-s-event-e/new' });
  this.route('i-i-s-e-m-s-lessor-l');
  this.route('i-i-s-e-m-s-lessor-e',
  { path: 'i-i-s-e-m-s-lessor-e/:id' });
  this.route('i-i-s-e-m-s-lessor-e.new',
  { path: 'i-i-s-e-m-s-lessor-e/new' });
  this.route('i-i-s-e-m-s-organizer-l');
  this.route('i-i-s-e-m-s-organizer-e',
  { path: 'i-i-s-e-m-s-organizer-e/:id' });
  this.route('i-i-s-e-m-s-organizer-e.new',
  { path: 'i-i-s-e-m-s-organizer-e/new' });
  this.route('i-i-s-e-m-s-participant-l');
  this.route('i-i-s-e-m-s-participant-e',
  { path: 'i-i-s-e-m-s-participant-e/:id' });
  this.route('i-i-s-e-m-s-participant-e.new',
  { path: 'i-i-s-e-m-s-participant-e/new' });
});

export default Router;

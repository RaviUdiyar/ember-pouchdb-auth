import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', function() {
    this.route('new');
  });
  this.route('login');
  this.route('register');
});

export default Router;

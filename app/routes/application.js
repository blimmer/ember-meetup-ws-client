import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Route.extend({
  flashMessages: service(),
});

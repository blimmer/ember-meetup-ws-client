import Ember from 'ember';
import ENV from 'notified/config/environment';

const { computed, inject: { service } } = Ember;

export default Ember.Service.extend({
  socketIo: service('socket-io'),

  socket: computed(function() {
    return this.get('socketIo').socketFor(ENV.websockets.host);
  })
});

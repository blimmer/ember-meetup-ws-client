import Ember from 'ember';
import ENV from 'notified/config/environment';

export default Ember.Service.extend({
  socketIo: Ember.inject.service('socket-io'),

  _startListening: Ember.on('init', function() {
    const socket = this.get('socketIo').socketFor(ENV.websockets.host);

    socket.on('connect', function() {
      console.log('connected');
    });

    socket.on('upgrade', this.showUpgradeNotification, this);
  }),

  showUpgradeNotification() {
    alert('lemme upgrade ya');
  }
});

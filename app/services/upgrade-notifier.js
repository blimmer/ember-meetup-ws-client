import Ember from 'ember';

const { on, inject } = Ember;

export default Ember.Service.extend({
  socketService: inject.service('socket'),
  flashMessages: inject.service(),

  _startListening: on('init', function() {
    const socket = this.get('socketService.socket');

    socket.on('upgrade', this.showUpgradeNotification, this);
  }),

  showUpgradeNotification() {
    this.get('flashMessages').alert(
      'A new version is available. Refresh.',
      { sticky: true }
    );
  }
});

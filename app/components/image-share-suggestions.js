import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  classNames: ['image-share-suggestions-container', 'small-12', 'columns'],

  socketService: inject.service('socket'),
  socket: computed.reads('socketService.socket'),

  imageSuggestions: [
    'https://media.giphy.com/media/YZaNlktdPMiTm/giphy.gif',  // bees
    'https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif',  // disappear
    'https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif',  // nyan
    'https://media.giphy.com/media/10we3R8dLZQ7hS/giphy.gif', // doge
  ],

  actions: {
    shareImg(url) {
      this.get('socket').emit('image shared', {
        imageUrl: url
      });
    }
  }
});

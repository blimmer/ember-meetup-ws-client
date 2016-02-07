import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  classNames: ['image-share-suggestions-container', 'small-12', 'columns'],

  socketService: inject.service('socket'),
  socket: computed.reads('socketService.socket'),

  store: inject.service('store'),
  imageSuggestions: computed(function() {
    return this.get('store').findAll('gif');
  }),

  actions: {
    shareImg(url) {
      this.get('socket').emit('image shared', {
        imageUrl: url
      });
    }
  }
});

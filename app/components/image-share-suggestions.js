import Ember from 'ember';

const { computed, inject: { service } } = Ember;

export default Ember.Component.extend({
  classNames: ['image-share-suggestions-container', 'small-12', 'columns'],

  socketService: service('socket'),
  socket: computed.reads('socketService.socket'),

  store: service('store'),
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

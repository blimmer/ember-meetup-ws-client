import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  classNames: ['shared-image-container', 'small-10', 'columns', 'small-offset-1'],

  socketService: inject.service('socket'),
  socket: computed.reads('socketService.socket'),

  init() {
    this._super(...arguments);

    this.get('socket').on('image shared', this.imageShared, this);
  },

  currentImage: null,
  imageShared(data={}) {
    this.set('currentImage', data['imageUrl']);
  }
});

export function initialize(appInstance) {
  /* Force initialization */
  appInstance.lookup('service:upgrade-notifier');
}

export default {
  name: 'upgrade-notifier',
  initialize: initialize
};

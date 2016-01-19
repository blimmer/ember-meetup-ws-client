import DS from 'ember-data';
import ENV from 'notified/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiEndpoint,
  namespace: 'api/v1',
});

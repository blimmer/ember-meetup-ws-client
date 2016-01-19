/* jshint node: true */

// Once we're on ember-cli-deploy 0.6.x, we can get rid of this.
// https://github.com/ember-cli/ember-cli-deploy/pull/342
require('dotenv').load();

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    pipeline: {
      activateOnDeploy: true
    },
    // include other plugin configuration that applies to all deploy targets here

    's3': {
      accessKeyId: 'AKIAITERJ7XSPN5YUTWA',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      bucket: 'notified-ember',
      region: 'us-west-2',
    },

    's3-index': {
      accessKeyId: 'AKIAITERJ7XSPN5YUTWA',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      bucket: 'notified-ember',
      region: 'us-west-2',
      allowOverwrite: true,
    },

    notifications: {
      services: {
        nodeNotifyClients: {
          body: function() {
            return {
              token: process.env.NOTIFY_TOKEN
            };
          },
          didActivate: true,
        }
      }
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    ENV.notifications.services.nodeNotifyClients.url = 'http://localhost:5000/api/v1/notify-upgrade';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.notifications.services.nodeNotifyClients.url = 'http://shared-image.herokuapp.com/api/v1/notify-upgrade';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};

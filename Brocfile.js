/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  dotEnv: {
    clientAllowedKeys: ['ADAPTER_URL']
  }
});

module.exports = app.toTree();

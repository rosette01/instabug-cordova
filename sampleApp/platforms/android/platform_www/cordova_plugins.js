cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "instabug-cordova.Instabug",
      "file": "plugins/instabug-cordova/www/instabug.js",
      "pluginId": "instabug-cordova",
      "clobbers": [
        "cordova.plugins.instabug"
      ]
    },
    {
      "id": "instabug-cordova.BugReporting",
      "file": "plugins/instabug-cordova/www/bugReporting.js",
      "pluginId": "instabug-cordova",
      "clobbers": [
        "cordova.plugins.bugReporting"
      ]
    },
    {
      "id": "instabug-cordova.FeatureRequests",
      "file": "plugins/instabug-cordova/www/featureRequests.js",
      "pluginId": "instabug-cordova",
      "clobbers": [
        "cordova.plugins.featureRequests"
      ]
    },
    {
      "id": "instabug-cordova.Surveys",
      "file": "plugins/instabug-cordova/www/surveys.js",
      "pluginId": "instabug-cordova",
      "clobbers": [
        "cordova.plugins.surveys"
      ]
    },
    {
      "id": "instabug-cordova.Chats",
      "file": "plugins/instabug-cordova/www/chats.js",
      "pluginId": "instabug-cordova",
      "clobbers": [
        "cordova.plugins.chats"
      ]
    },
    {
      "id": "instabug-cordova.Replies",
      "file": "plugins/instabug-cordova/www/replies.js",
      "pluginId": "instabug-cordova",
      "clobbers": [
        "cordova.plugins.replies"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "instabug-cordova": "8.0.4"
  };
});
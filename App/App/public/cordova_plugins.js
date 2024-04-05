
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open"
        ]
        },
      {
          "id": "cordova-plugin-request-location-accuracy.RequestLocationAccuracy",
          "file": "plugins/cordova-plugin-request-location-accuracy/www/ios/RequestLocationAccuracy.js",
          "pluginId": "cordova-plugin-request-location-accuracy",
        "clobbers": [
          "cordova.plugins.locationAccuracy"
        ]
        },
      {
          "id": "cordova-plugin-myfatoorah.MyFatoorahCordovaPlugin",
          "file": "plugins/cordova-plugin-myfatoorah/www/MyFatoorahCordovaPlugin.js",
          "pluginId": "cordova-plugin-myfatoorah",
        "clobbers": [
          "cordova.plugins.MyFatoorahCordovaPlugin"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-inappbrowser": "5.0.0",
      "cordova-plugin-myfatoorah": "1.0.6",
      "cordova-plugin-request-location-accuracy": "2.3.0"
    };
    // BOTTOM OF METADATA
    });
    
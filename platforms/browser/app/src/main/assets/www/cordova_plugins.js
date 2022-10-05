cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.ashera.core.coreManager",
      "file": "plugins/com.ashera.core/core/browser/www/coreManager.js",
      "pluginId": "com.ashera.core",
      "clobbers": [
        "coreManager"
      ]
    },
    {
      "id": "com.ashera.core.coreAddRes",
      "file": "plugins/com.ashera.core/core/browser/www/js/add_res.js",
      "pluginId": "com.ashera.core",
      "runs": true
    },
    {
      "id": "com.ashera.core.layoutAddRes",
      "file": "plugins/com.ashera.core/layout/browser/www/js/add_res.js",
      "pluginId": "com.ashera.core",
      "runs": true
    },
    {
      "id": "com.ashera.datetime.datetimeAddRes",
      "file": "plugins/com.ashera.datetime/browser/www/js/add_res.js",
      "pluginId": "com.ashera.datetime",
      "runs": true
    },
    {
      "id": "com.ashera.toolbar.toolbarAddRes",
      "file": "plugins/com.ashera.toolbar/browser/www/js/add_res.js",
      "pluginId": "com.ashera.toolbar",
      "runs": true
    },
    {
      "id": "com.filfatstudios.spinnerdialog.SpinnerDialog",
      "file": "plugins/com.filfatstudios.spinnerdialog/android_ios/www/SpinnerDialog.js",
      "pluginId": "com.filfatstudios.spinnerdialog",
      "clobbers": [
        "SpinnerDialog"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraProxy",
      "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
      "pluginId": "cordova-plugin-camera",
      "runs": true
    },
    {
      "id": "cordova-plugin-qrscanner.QRScanner",
      "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
      "pluginId": "cordova-plugin-qrscanner",
      "clobbers": [
        "QRScanner"
      ]
    },
    {
      "id": "cordova-plugin-qrscanner.QRScannerProxy",
      "file": "plugins/cordova-plugin-qrscanner/src/browser/plugin.min.js",
      "pluginId": "cordova-plugin-qrscanner",
      "runs": true
    }
  ];
  module.exports.metadata = {
    "com.ashera.capinsets": "1.0",
    "com.ashera.constraintlayout": "1.0",
    "com.ashera.core": "1.0",
    "com.ashera.cssborder": "1.0",
    "com.ashera.custom": "1.0",
    "com.ashera.datetime": "1.0",
    "com.ashera.drawerlayout": "1.0",
    "com.ashera.glide": "1.0",
    "com.ashera.gridlayout": "1.0",
    "com.ashera.iqkeyboardmanager.ios": "1.0",
    "com.ashera.recycleview": "1.0",
    "com.ashera.sdwebimage.ios": "1.0",
    "com.ashera.shutterbug": "1.0",
    "com.ashera.toolbar": "1.0",
    "com.filfatstudios.spinnerdialog": "1.0.2",
    "cordova-plugin-camera": "6.0.1-dev",
    "cordova-plugin-camera-swt": "1.0",
    "cordova-plugin-qrscanner": "3.0.1"
  };
});
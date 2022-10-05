cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.ashera.core.coreManager",
      "file": "plugins/com.ashera.core/core/swt/www/coreManager.js",
      "pluginId": "com.ashera.core",
      "clobbers": [
        "coreManager"
      ]
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
      "id": "cordova-plugin-qrscanner.QRScanner",
      "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
      "pluginId": "cordova-plugin-qrscanner",
      "clobbers": [
        "QRScanner"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.5",
    "com.ashera.core": "1.0",
    "com.ashera.capinsets": "1.0",
    "com.ashera.constraintlayout": "1.0",
    "com.ashera.cssborder": "1.0",
    "com.ashera.custom": "1.0",
    "com.ashera.datetime": "1.0",
    "com.ashera.drawerlayout": "1.0",
    "com.ashera.gridlayout": "1.0",
    "com.ashera.recycleview": "1.0",
    "com.ashera.toolbar": "1.0",
    "com.ashera.iqkeyboardmanager.ios": "1.0",
    "com.ashera.shutterbug": "1.0",
    "com.ashera.glide": "1.0",
    "com.ashera.sdwebimage.ios": "1.0",
    "cordova-plugin-splashscreen-ashera": "1.0",
    "com.filfatstudios.spinnerdialog": "1.0.2",
    "cordova-plugin-camera": "6.0.1-dev",
    "cordova-plugin-camera-swt": "1.0",
    "cordova-plugin-qrscanner-swt": "1.0",
    "cordova-plugin-qrscanner": "3.0.1"
  };
});
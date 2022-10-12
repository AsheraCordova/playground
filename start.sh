rm -r platforms
rm -r node_modules
rm -r plugins
cordova prepare
cd platforms/android/app/src/main/gentool
npm install
npm run restore
npm run resize

cd ../tsc
npm install

cd ../../../../../../
cd platforms/android/app/src/main/gentool
npm run start skip_watch

cd ../tsc
npm run build

cd ../../../../../../
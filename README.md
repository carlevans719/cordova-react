# Cordova React boilerplate

This is a very basic Cordova + React app. The React app source code is in `./src`. The `./build` directory is actually a symlink to `./www` so that Webpack builds the app to there.

## Instructions

### Prerequisites

You need to have the JDK, gradle & the Android SDK with latest build-tools etc...

1. Install cordova - `npm i -g cordova`
1. Install npm dependencies - `npm i`
1. Add the Android platform - `cordova platform add android`
1. You can now deploy the app to your mobile, enable USB debugging, plug in your phone and grant access. Run `cordova run android`

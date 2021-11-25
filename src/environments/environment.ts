import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAsNkSQ-3Q3gtgtmjUZyO4BXOY_jj2DZuM",
    authDomain: "repoitlp-c59be.firebaseapp.com",
    projectId: "repoitlp-c59be",
    storageBucket: "repoitlp-c59be.appspot.com",
    messagingSenderId: "325903239984",
    appId: "1:325903239984:web:5c3be8a2a1714b33cd16f5",
    measurementId: "G-Y4J71FCBKB"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

import firebase from 'firebase/compat/app';

import {
  REACT_APP_APIKEY,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_SENDERID,
  REACT_APP_APPID,
} from '@env';

import 'firebase/compat/database';
import 'firebase/compat/auth';

let firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_SENDERID,
  appId: REACT_APP_APPID,
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
export default firebase;

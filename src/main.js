import env from '../.env.js';
import Firebase from 'firebase';
import * as FirebaseAdmin from "firebase-admin";

const config = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId
}

Firebase.initializeApp(config);

// Authentication

var serviceAccount = require(env.serviceAccountJsonPath);

FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(serviceAccount),
  databaseURL: env.databaseURL
});

const uid = "foobar";

FirebaseAdmin.auth().createCustomToken(uid)
  .then(function(customToken) {
    console.info('customToken', customToken);
  })
  .catch(function(error) {
    console.log("Error creating custom token:", error);
  });

console.info('set callback');
Firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.info('login success', user);
  } else {
    // User is signed out.
    console.info('signed out', user);
  }
});


console.info('sign in');
Firebase.auth().signInWithEmailAndPassword(env.userEmail, env.userPassword).catch((error) => {
  console.info('auth error!!!');
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
});

// Realtime Database

const database = Firebase.database();

const pushData = (name, email) => {
  database.ref().child('foo').push({
    name, email
  })
}

const writeUserData = (userId, name, email) => {
  database.ref('users/' + userId).set({
    name, email
  })
};

pushData(2, 'foo', 'foo@example.com');
writeUserData('2', 'foo', 'foo@example.com');

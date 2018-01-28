import env from '../.env.js'
import Firebase from 'firebase'

const config = {
  apiKey: env.firebaseApiKey,
  authDomain: env.firebaseAuthDomain,
  databaseURL: env.firebaseDatabaseURL,
  storageBucket: env.firebaseStorageBucket
}

Firebase.initializeApp(config);

const database = Firebase.database();

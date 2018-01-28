import env from '../.env.js'
import Firebase from 'firebase'

const config = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId
}

console.info('config', config)

Firebase.initializeApp(config);

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

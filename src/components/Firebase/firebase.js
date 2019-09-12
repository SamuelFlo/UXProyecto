import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBoW1Q_JIPYsXXHv4HBHcClAXNZZpSo2Os",
  authDomain: "database-f19f4.firebaseapp.com",
  databaseURL: "https://database-f19f4.firebaseio.com",
  projectId: "database-f19f4",
  storageBucket: "",
  messagingSenderId: "1088622889794",
  appId: "1:1088622889794:web:bd9a50f7c19f0f2fad96db"
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
  reservar = uid => this.db.ref(`reservas/${uid}`);
  reservas = () => this.db.ref('reservas');
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default Firebase;

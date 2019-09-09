import app from 'firebase/app';
import 'firebase/auth';
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
  }
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;

import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAmlt5RqU3Oh-WWo4j2ZQXmNatK_xwzOnI",
    authDomain: "imessage-clone-b0b66.firebaseapp.com",
    databaseURL: "https://imessage-clone-b0b66.firebaseio.com",
    projectId: "imessage-clone-b0b66",
    storageBucket: "imessage-clone-b0b66.appspot.com",
    messagingSenderId: "481553011819",
    appId: "1:481553011819:web:796aef816a4e8adaa88d2e",
    measurementId: "G-MJVNR53MG9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
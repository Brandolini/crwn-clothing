import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvSDRVpOtgWTdUBDWjS4AvyaBleTs86uQ",
    authDomain: "crwn-clothing-001.firebaseapp.com",
    databaseURL: "https://crwn-clothing-001.firebaseio.com",
    projectId: "crwn-clothing-001",
    storageBucket: "crwn-clothing-001.appspot.com",
    messagingSenderId: "602858904008",
    appId: "1:602858904008:web:14e6726f383fc5f6bbc8fd",
    measurementId: "G-Q9RNK1XH8K"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        console.log(snapShot);
    if (!snapShot.exists){
        const { displayName, email }  = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error)
        }
    }
    return userRef;
  }

 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  export default firebase;
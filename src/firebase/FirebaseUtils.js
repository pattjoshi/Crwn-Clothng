import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDORpNKSxFa216D3nVN41Efzhc_MidFd9c",
  authDomain: "crwn-clothng.firebaseapp.com",
  projectId: "crwn-clothng",
  storageBucket: "crwn-clothng.appspot.com",
  messagingSenderId: "17524629387",
  appId: "1:17524629387:web:1a2bfc4bf310e5d2ffd98e",
  measurementId: "G-69T2JFPVPE",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//  "firebase": "6.0.2",  firebase version

// import firebase from 'firebase/app';
// //  Initialisation firebse
// import 'firebase/firestore'
// // firestore:- use for data base
// import 'firebase/auth'
// // auth :- use for authantication
// const config = {
//     // This is already given by forebase
//     apiKey: "AIzaSyDORpNKSxFa216D3nVN41Efzhc_MidFd9c",
//     authDomain: "crwn-clothng.firebaseapp.com",
//     projectId: "crwn-clothng",
//     storageBucket: "crwn-clothng.appspot.com",
//     messagingSenderId: "17524629387",
//     appId: "1:17524629387:web:1a2bfc4bf310e5d2ffd98e",
//     measurementId: "G-69T2JFPVPE"
// };

// firebase.initializeApp(config);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if (!userAuth) return;

//     const userRef = firestore.doc(`users/${userAuth.uid}`);

//     const snapShot = await userRef.get();

//     if (!snapShot.exists) {
//         const { displayName, email } = userAuth;
//         const createdAt = new Date();
//         try {
//             await userRef.set({
//                 displayName,
//                 email,
//                 createdAt,
//                 ...additionalData
//             });
//         } catch (error) {
//             console.log('error creating user', error.message);
//         }
//     }

//     return userRef;
// };

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// // These are need for Google Authantication
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider)

// export default firebase;

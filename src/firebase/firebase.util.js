import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBpTJ7nt8rbYYf-q9mBPc05VS41alCoBqc",
    authDomain: "crwn-db-615a9.firebaseapp.com",
    projectId: "crwn-db-615a9",
    storageBucket: "crwn-db-615a9.appspot.com",
    messagingSenderId: "501572076107",
    appId: "1:501572076107:web:62b326d652c412744603ce"
  }
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`)

   const snapShot = await userRef.get()
     if(!snapShot.exists) {
         const { displayName, email, } = userAuth
         const createdAt = new Date();

         try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
         } catch (error) {
            console.log('error creating user', error.message)
         }
     }
     return userRef;
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase
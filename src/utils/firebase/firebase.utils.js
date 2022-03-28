// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirectm,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc 
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrxbeFZcR6_b1isCy-QK0iNg_PW2UZLyA",
  authDomain: "crwn-clothing-db-zk.firebaseapp.com",
  projectId: "crwn-clothing-db-zk",
  storageBucket: "crwn-clothing-db-zk.appspot.com",
  messagingSenderId: "725789616359",
  appId: "1:725789616359:web:966d975bb8e0c6c481da42",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());
    
    //if user data exists
    //return userDocRef
    
    //if user data does not exists
    //create/ setDoc with the data from userAuth in my collections
    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            });
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
};
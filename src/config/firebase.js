
import {initializeApp} from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
//require('firebase/auth');

import { getFirestore, collection, where , query ,getDocs ,addDoc, deleteDoc ,doc, getDoc ,updateDoc,onSnapshot,Timestamp} from 'firebase/firestore';

import {getStorage,ref,uploadBytes,listAll,getDownloadURL} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAqXmX6W9gzj20zhUhwYlGjt-tR6HiZPFY",
  authDomain: "cw-network-faff5.firebaseapp.com",
  projectId: "cw-network-faff5",
  storageBucket: "cw-network-faff5.appspot.com",
  messagingSenderId: "214396353426",
  appId: "1:214396353426:web:10408a78076026eef75f4b",
  measurementId: "G-WGWKY1866T"
};


// Initialize Firebase
initializeApp(firebaseConfig);

export const fb = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(fb);

export const storage = getStorage(fb);

/*export const auth = firebase.auth();*/

export const static_img = 'https://firebasestorage.googleapis.com/v0/b/bridgetech-advance-project.appspot.com/o/profile_images%2Fprofile.jpg?alt=media&token=b3c94ada-1b08-4834-bbd1-647882c7195a';







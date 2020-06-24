import firebase from 'firebase/app'
import "firebase/auth";
import 'firebase/database';

import { createContext } from 'react'

const firebaseConfig = {
	apiKey: "AIzaSyAHaT1FW3tiQopAMDhOYHWkSTDoMhknlX8",
	authDomain: "react-firebase-6d8e4.firebaseapp.com",
	databaseURL: "https://react-firebase-6d8e4.firebaseio.com",
	projectId: "react-firebase-6d8e4",
	storageBucket: "react-firebase-6d8e4.appspot.com",
	messagingSenderId: "368633300790",
	appId: "1:368633300790:web:cf3beaf7918dbcf0ef9597"
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firebaseDB = firebase.database()

export const FirebaseContext = createContext(firebase)
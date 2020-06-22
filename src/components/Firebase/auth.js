import { firebaseAuth } from './firebase'

export const doSignInWithEmailAndPassword = (email, pass) => {
	firebaseAuth.signInWithEmailAndPassword(email, pass)
}

export const doSignOut = () => firebaseAuth.signOut();
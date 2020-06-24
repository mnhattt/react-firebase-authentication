import { firebaseAuth, firebaseDB } from './firebase'

export const signInWithEmailAndPassword = (email, pass) => {
	return firebaseAuth.signInWithEmailAndPassword(email, pass)
}

export const createUserWithEmailAndPassword = (email, pass) => {
	return firebaseAuth.createUserWithEmailAndPassword(email, pass)
}

export const getUserById = (id) => firebaseDB.ref(`users/${id}`);

export const signOut = () => firebaseAuth.signOut();
import React from 'react';
import { useHistory } from 'react-router-dom'
import { firebaseAuth } from '../Firebase'

const SignIn = () => {
	const history = useHistory()

	const handleSignIn = () => {
		firebaseAuth.signInWithEmailAndPassword("minhnhat10bk@gmail.com", "123456").then(() => {
			history.push('/')
		})

	}
	return (
		<div>
			<button onClick={handleSignIn}>sign in</button>
		</div>
	)
}

export default SignIn
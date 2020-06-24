import React from 'react';
import { useHistory } from 'react-router-dom'
import { auth } from '../Firebase'

const SignIn = () => {
	const history = useHistory()

	const handleSignIn = () => {
		auth.signInWithEmailAndPassword("minhnhat10bk@gmail.com", "123123").then(() => {
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
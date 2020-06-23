import React from 'react';
import { firebaseAuth } from '../Firebase'
import { useHistory } from 'react-router-dom'

const SignOut = () => {
	const history = useHistory()

	const handleSignOut = () => {
		firebaseAuth.signOut().then(() => history.push('/'))
	}
	return (
		<div>
			<button onClick={handleSignOut}>sign out</button>
		</div>
	)
}

export default SignOut
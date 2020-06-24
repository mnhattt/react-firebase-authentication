import React from 'react';
import { auth } from '../Firebase'
import { useHistory } from 'react-router-dom'

const SignOut = () => {
	const history = useHistory()

	const handleSignOut = () => {
		auth.signOut().then(() => history.push('/'))
	}

	return (
		<div>
			<button type="button" onClick={handleSignOut}>Sign Out</button>
		</div>
	)
}

export default SignOut
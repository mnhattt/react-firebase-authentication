import React, { useState, useEffect } from 'react';

import { firebaseAuth } from '../Firebase'
export const AuthUserContext = React.createContext(null)

export const withAuthentication = Component => () => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		firebaseAuth.onAuthStateChanged(authUser => {
			setUser(authUser)
		})
	}, [])

	return (
		<AuthUserContext.Provider value={user}>
			<Component />
		</AuthUserContext.Provider>
	)
}
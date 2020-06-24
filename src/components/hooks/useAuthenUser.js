import { useState, useEffect } from 'react';
import { firebaseAuth } from '../Firebase'


function useAuthenUser() {
	const [authUser, setAuthUser] = useState(null)

	useEffect(() => {
		firebaseAuth.onAuthStateChanged(user => setAuthUser(user))
	})

	return { authUser }
}

export default useAuthenUser;
import { useState, useEffect } from 'react';
import { firebaseAuth, auth } from '../Firebase'


function useAuthenUser() {
	const [authUser, setAuthUser] = useState(null)

	useEffect(() => {
		firebaseAuth.onAuthStateChanged(authUser => {
			if (authUser) {
				auth.getUserById(authUser.uid).once('value').then(snapshot => {
					const dbUser = snapshot.val();
					const authenUser = {
						uid: authUser.uid,
						email: authUser.email,
						emailVerified: authUser.emailVerified,
						providerData: authUser.providerData,
						...dbUser,
					}
					setAuthUser(authenUser)
				})
			}
		})
	}, [])

	return { authUser }
}

export default useAuthenUser;
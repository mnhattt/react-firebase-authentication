import { useState, useEffect } from 'react';
import { firebaseAuth, auth } from '../Firebase'


function useAuthenUser() {
	const [authUser, setAuthUser] = useState(null)
	useEffect(() => {
		const listener = firebaseAuth.onAuthStateChanged(authUser => {
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
					console.log('useAuthenUser authUser', authenUser)
					setAuthUser(authenUser)
				})
			} else {
				setAuthUser(false)
			}
		})
		return () => listener()
	}, [])

	return { authUser }
}

export default useAuthenUser;
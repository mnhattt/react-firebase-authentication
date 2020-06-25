import React, { useContext } from 'react'
import { useAuthenUser } from '../hooks/'

const AuthUserContext = React.createContext(null);

export function ProvideAuth({ children }) {
	const { authUser } = useAuthenUser()
	// console.log('ProvideAuth authUser', authUser)
	return <AuthUserContext.Provider value={authUser}>{children}</AuthUserContext.Provider>;
}

export const useAuth = () => {
	return useContext(AuthUserContext);
};
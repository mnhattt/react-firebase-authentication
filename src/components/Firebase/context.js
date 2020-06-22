import React from 'react';

export const AuthUserContext = React.createContext(null)

export const withAuthentication = Component => (
	<AuthUserContext.Provider value={{}}>
		<Component></Component>
	</AuthUserContext.Provider>
)
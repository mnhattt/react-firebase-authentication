import React, { useState, useEffect } from 'react';
import { useAuth } from '../util/authUserContext'
import { useHistory } from 'react-router-dom'

function checkRoles(userRoles) {
	return userRoles.includes('ADMIN')
}

const withAuthz = Component => (props) => {
	const user = useAuth()
	const history = useHistory()
	const [isAuthz, setAuthz] = useState(false)

	useEffect(() => {
		if (user && checkRoles(user.roles, props.roles, history)) {
			setAuthz(true)
		} else {
			history.push('/')
		}
	}, [user, history, props.roles])


	return (isAuthz ? <Component {...props} /> : <div>authz errorrrr page</div>)
}

export default withAuthz;
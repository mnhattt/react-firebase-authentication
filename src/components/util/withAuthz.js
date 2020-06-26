import React, { useState, useEffect } from 'react';
import { useAuth } from '../util/authUserContext'
import { useHistory } from 'react-router-dom'


const withAuthz = rules => Component => (props) => {
	const user = useAuth()
	const history = useHistory()
	const [isAuthz, setAuthz] = useState(false)

	useEffect(() => {
		if (user && rules(user)) {
			setAuthz(true)
		} else {
			// history.push('/')
		}
	}, [user, history, props.roles])


	return (isAuthz ? <Component /> : <div>authz errorrrr page</div>)
}

export default withAuthz;
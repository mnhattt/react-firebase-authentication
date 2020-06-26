import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles';
import { useAuth } from '../util/authUserContext'

const Navigation = () => {
	const authUser = useAuth()

	return (authUser ?
		<NavigationAuth authUser={authUser} /> :
		<NavigationNonAuth />)
};

const NavigationAuth = ({ authUser }) => (
	<ul>
		<li>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={ROUTES.HOME}>Home</Link>
		</li>
		<li>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</li>
		{(authUser && authUser.roles && !!authUser.roles.includes(ROLES.ADMIN)) && (
			<li>
				<Link to={ROUTES.ADMIN}>Admin</Link>
			</li>
		)}
		<li>
			<Link to={ROUTES.Sign_OUT}>Sign_OUT</Link>
		</li>
	</ul>
);

const NavigationNonAuth = () => (
	<ul>
		<li>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={ROUTES.SIGN_IN}>Sign In</Link>
		</li>
		<li>
			<Link to={ROUTES.SIGN_UP}>SIGN_UP</Link>
		</li>
	</ul>
);

export default Navigation;
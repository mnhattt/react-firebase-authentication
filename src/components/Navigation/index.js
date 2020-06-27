import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles';
import { useAuth } from '../util/authUserContext'
import Nav from 'react-bootstrap/Nav'
const Navigation = () => {
	const authUser = useAuth()

	return (authUser ?
		<NavigationAuth authUser={authUser} /> :
		<NavigationNonAuth />)
};

const NavigationAuth = ({ authUser }) => (
	<Nav className="" activeKey={ROUTES.LANDING}>
		<Nav.Item>
			<Nav.Link>
				<Link to={ROUTES.LANDING}>Landing</Link>
			</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link><Link to={ROUTES.HOME}>Home</Link></Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link><Link to={ROUTES.ACCOUNT}>Account</Link></Nav.Link>
		</Nav.Item>
		{(authUser && authUser.roles && !!authUser.roles.includes(ROLES.ADMIN)) && (
			<Nav.Item>
				<Nav.Link><Link to={ROUTES.ADMIN}>Admin</Link></Nav.Link>
			</Nav.Item>
		)}
		<Nav.Item>
			<Nav.Link><Link to={ROUTES.Sign_OUT}>Sign_OUT</Link></Nav.Link>
		</Nav.Item>
	</Nav>
);

const NavigationNonAuth = () => (
	<Nav>
		<Nav.Item>
			<Nav.Link><Link to={ROUTES.LANDING}>Landing</Link></Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link><Link to={ROUTES.SIGN_IN}>Sign In</Link></Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link><Link to={ROUTES.SIGN_UP}>SIGN_UP</Link></Nav.Link>
		</Nav.Item>
	</Nav>
);

export default Navigation;
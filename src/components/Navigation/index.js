import React from 'react';
import { Link } from 'react-router-dom'
import { ACCOUNT, SIGN_IN, Sign_OUT, HOME, ADMIN, LANDING } from '../../constants/routes'


export default () => (
	<div>
		<ul>
			<li>
				<Link to={SIGN_IN}>SIGN_IN</Link>
			</li>
			<li>
				<Link to={Sign_OUT}>Sign_OUT</Link>
			</li>
			<li>
				<Link to={LANDING}>LANDING</Link>
			</li>
			<li>
				<Link to={HOME}>Home</Link>
			</li>
			<li>
				<Link to={ACCOUNT}>Account</Link>
			</li>
			<li>
				<Link to={ADMIN}>ADMIN</Link>
			</li>
		</ul>
	</div>
)
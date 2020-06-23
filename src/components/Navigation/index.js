import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ACCOUNT, SIGN_IN, Sign_OUT, HOME, ADMIN, LANDING } from '../../constants/routes'


export default ({ user }) => {

	return (
		<div>
			<ul>
				<li>
					<Link to={LANDING}>LANDING</Link>
				</li>
				<li>
					{user !== null ? <Link to={Sign_OUT}>Sign_OUT</Link> : <Link to={SIGN_IN}>SIGN_IN</Link>}
				</li>
				{user &&
					<>
						< li >
							<Link to={HOME}>Home</Link>
						</li>
						<li>
							<Link to={ACCOUNT}>Account</Link>
						</li>
						<li>
							<Link to={ADMIN}>ADMIN</Link>
						</li>
					</>
				}
			</ul>
		</div>)
}
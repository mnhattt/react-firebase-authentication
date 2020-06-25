import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../Firebase'

import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	isAdmin: false,
	error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

const SignUpForm = () => {
	const [user, setUser] = useState(INITIAL_STATE)

	const { username, email, passwordOne, passwordTwo, isAdmin, error, } = user

	const history = useHistory()

	const onSubmit = (e) => {
		const roles = [];

		if (isAdmin) {
			roles.push(ROLES.ADMIN);
		}

		auth.createUserWithEmailAndPassword(email, passwordOne)
			.then(({ user: { uid } }) => {
				const userRef = auth.getUserById(uid)
				console.log('dbUser', roles)
				userRef.set({ username, email, roles })
				setUser(INITIAL_STATE)
				history.push('/')
			})
			.catch(error => {
				console.log('error', error)
				if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
					error.message = ERROR_MSG_ACCOUNT_EXISTS;
				}
			});
		e.preventDefault();
	}

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const onChangeCheckbox = (e) => {
		setUser({ ...user, [e.target.name]: e.target.checked })
	}


	return (
		<form onSubmit={onSubmit}>
			<input
				name="username"
				value={username}
				onChange={onChange}
				type="text"
				placeholder="Full Name"
			/>
			<input
				name="email"
				value={email}
				onChange={onChange}
				type="text"
				placeholder="Email Address"
			/>
			<input
				name="passwordOne"
				value={passwordOne}
				onChange={onChange}
				type="password"
				placeholder="Password"
			/>
			<input
				name="passwordTwo"
				value={passwordTwo}
				onChange={onChange}
				type="password"
				placeholder="Confirm Password"
			/>
			<label>
				Admin:
          <input
					name="isAdmin"
					type="checkbox"
					checked={isAdmin}
					onChange={onChangeCheckbox}
				/>
			</label>
			<button type="submit">
				Sign Up
        </button>

			{error && <p>{error.message}</p>}
		</form>
	)
}

// const SignUpLink = () => (
//   <p>
//     Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
//   </p>
// );

const SignUpPage = () => (
	<div>
		<h1>SignUp</h1>
		<SignUpForm />
	</div>
);

export default SignUpPage;

import React from 'react';
import { doSignOut } from '../Firebase/auth'

export default () => (
	<div>
		<button onClick={() => doSignOut()}>sign out</button>
	</div>
)
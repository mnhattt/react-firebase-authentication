import React from 'react';
import { firebaseAuth } from '../Firebase'

export default () => (
	<div>
		<button onClick={() => firebaseAuth.signInWithEmailAndPassword("minhnhat10bk@gmail.com", "123456")}>sign in</button>
	</div>
)
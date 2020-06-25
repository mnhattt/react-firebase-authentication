import React from 'react';
import withAuthz from '../util/withAuthz'

const Admin = () => (
	<div>
		admin page, need admin role
	</div>
)

export default withAuthz(Admin)
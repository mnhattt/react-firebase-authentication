import React from 'react';
import withAuthz from '../util/withAuthz'

const Admin = () => (
	<div>
		admin page, need admin role
	</div>
)

const rules = (user) => user.roles.includes('ADMINN')

export default withAuthz(rules)(Admin)
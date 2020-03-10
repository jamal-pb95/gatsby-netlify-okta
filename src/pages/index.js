import React from 'react';
import { Link } from 'gatsby';

export default () => (
	<div>
		<h1>Hello world!</h1>
		<p>
			<Link to="/blog">Blog</Link>
		</p>
		<p>
			<Link to="/account">Account</Link>
		</p>
	</div>
);

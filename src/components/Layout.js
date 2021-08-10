import React from 'react';
import Banner from './Banner';

import NumberTracker from './NumberTracker';
import ProjectBody from './ProjectBody';

function Layout(props) {
	return (
		<div>
			<div className='main'>
				<Banner />
				<NumberTracker />
				<ProjectBody />
			</div>
		</div>
	);
}

export default Layout;

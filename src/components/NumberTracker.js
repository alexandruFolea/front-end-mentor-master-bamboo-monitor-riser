import React from 'react';

function NumberTracker() {
	return (
		<div className='numbers-page'>
			<div className='numbers-container'>
				<div className='first'>
					<h1>$89,914</h1>
					<p>of 100,000 backed</p>
				</div>
				<div className='second'>
					<h1>5,007</h1>
					<p>total backers</p>
				</div>
				<div className='third'>
					<h1>56</h1>
					<p>days left</p>
				</div>
			</div>
			<div className='bar'></div>
		</div>
	);
}

export default NumberTracker;

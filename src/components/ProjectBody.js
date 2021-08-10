import React from 'react';
import Card from './Card';

function ProjectBody() {
	return (
		<div className='project-body'>
			<div className='intro-text'>
				<h3>About this project</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
					placeat sunt voluptatibus velit inventore id temporibus eius quae
					maiores, doloremque perspiciatis dignissimos tempora at non ab? Magnam
					tempore amet et?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
					doloribus sequi, dicta quos consectetur quod facilis rerum.
				</p>
			</div>

			<Card
				title='Bamboo Stand'
				pledge='Pledge $25 or more'
				amount='101'
				reward='Select Reward'
			/>
			<Card
				title='Black Edition Stand'
				pledge='Pledge $75 or more'
				amount='64'
				reward='Select Reward'
			/>
			<Card
				className='last-card'
				title='Mahogony Special Edition'
				pledge='Pledge $200 or more'
				amount='0'
				reward='Out of stock'
			/>
		</div>
	);
}

export default ProjectBody;

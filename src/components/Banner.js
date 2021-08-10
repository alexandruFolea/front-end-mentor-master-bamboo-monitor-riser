import React from 'react';
import bookmark from '../images/icon-bookmark.svg';
import logoMc from '../images/logo-mastercraft.svg';

function Banner() {
	return (
		<div className='banner'>
			<div className='title-text'>
				<img src={logoMc} alt='' />
				<h1>Mastercraft Bamboo Monitor Riser</h1>
				<p>
					A beautiful handcrafted monitor stand to reduce neck and eye strain
				</p>
			</div>
			<div className='buttons'>
				<button className='btn-one'>Back this project</button>
				<button className='btn-two'>
					<img src={bookmark} alt='' />
					Bookmark
				</button>
			</div>
		</div>
	);
}

export default Banner;

import React from 'react';

function Card(props) {
	return (
		<div className='card'>
			<div className='card-title'>
				<h3>{props.title}</h3>
				<p>{props.pledge}</p>
			</div>
			<div className='card-text'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit autem saepe
					laudantium sapiente non. Iste.
				</p>
			</div>
			<div className='card-buttons'>
				<div className='card-btn-left'>
					<h1>{props.amount}</h1>
					<p>left</p>
				</div>
				<div className='card-btn-right'>
					<button>{props.reward}</button>
				</div>
			</div>
		</div>
	);
}

export default Card;

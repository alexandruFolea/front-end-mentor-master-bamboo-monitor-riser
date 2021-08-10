import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Navigation() {
	return (
		<div>
			<nav className='nav-bar'>
				<div className='logo'>
					<img src={logo} alt='' />
				</div>
				<ul className='nav-menu'>
					<li>
						<button>About</button>
					</li>
					<li>
						<button>Discover</button>
					</li>
					<li>
						<button>Get Started</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;

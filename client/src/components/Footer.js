import React from 'react';
import "./Footer.css";

const Footer = () => (
	<footer>
		<div>
			Coded and built with{' '}
			<span role='img' aria-label='heart'>
				❤️
			</span>{' '}
			by{' '}
			<a
				href='https://www.linkedin.com/in/synkevych'
				target='_blank'
				rel='noopener noreferrer'
			>
				Synkevych{' '}
			</a>
		</div>
		Source code available on{' '}
		<a
			href='https://github.com/Synkevych/react_examples/tree/master/create-reat-app/country-flag-game'
			target='_blank'
			rel='noopener noreferrer'
		>
			GitHub
		</a>
	</footer>
);
export default Footer;

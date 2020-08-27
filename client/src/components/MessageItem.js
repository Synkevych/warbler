import React from 'react';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({
	date,
	username,
	text,
	profileImageUrl,
	removeMessage,
	isCorrectUser
}) => (
	<div>
		<li className='list-group-item'>
			<img
				src={profileImageUrl || DefaultProfileImg}
				alt={username}
				height='100'
				width='100'
				className='timeline-image'
			/>
			<div className='message-area'>
				<Link to='/'>@{username} &nbsp;</Link>
				<span className='text-muted'>
					<time className='text-muted' dateTime={date}>
						{date}
					</time>
				</span>
				<p>{text}</p>
				{isCorrectUser && (
					<a href={'/'} className='btn btn-danger' onClick={removeMessage}>
						{/* href={"/remove/"+link} */}
						Delete
					</a>
				)}
			</div>
		</li>
	</div>
);

export default MessageItem;

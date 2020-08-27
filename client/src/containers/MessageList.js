import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/messages';
import MessageItem from '../components/MessageItem';
import './MessageList.css';

class MessageList extends React.Component {
	componentDidMount() {
		this.props.fetchMessages();
	}
	render() {
		const { messages, removeMessage, currentUser } = this.props;

		let messageList = messages.map(m => {
			let date = new Date(m.createdAt);
			let options = {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric'
			};
			date =date.toLocaleString("en-US", options)
			return (
				<MessageItem
					key={m._id}
					date={date}
					text={m.text}
					username={m.user.username}
					profileImageUrl={m.user.profileImageUrl}
					removeMessage={removeMessage.bind(this, m.user._id, m._id)}
					isCorrectUser={currentUser === m.user._id}
					link={m._id}
				/>
			);
		});
		return (
			<div className='row col-sm-8'>
				<div className='offset-1 col-sm-10'>
					<ul className='list-group' id='messages'>
						{messageList}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		messages: state.messages,
		currentUser: state.currentUser.user.id
	};
}

export default connect(
	mapStateToProps,
	{ fetchMessages, removeMessage }
)(MessageList);

const express = require('express');
const router = express.Router({ mergeParams: true });

const {
	createMessage,
	getMessages,
	deleteMessage
} = require('../handlers/messages');

// prefix - /api/users/:id/messages
router.route('/').post(createMessage);

// prefix - /api/users/:id/messages/:message_id

router
	.route('/:message_id')
	.get(getMessages)
	.delete(deleteMessage);

module.exports = router;

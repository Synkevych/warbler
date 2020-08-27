const mongoose = require("mongoose");
mongoose.set("dubug", true);

mongoose.Promise = Promise;

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/warbler',
	{
		keepAlive: true,
		useNewUrlParser: true
	}
);

module.exports.User = require("./user");
module.exports.Message = require("./message");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const messageSchema = new Schema(
	{
		username: {
			type: String
		},

		password: {
			type: String
		},

		information: {
			type: String
		},
	}
);

module.exports = new Model("Messages", messageSchema);

// today: new Date(),

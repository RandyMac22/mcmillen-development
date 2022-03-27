const router = require("../routes/");

module.exports = (app) => {
	app.use("/users", router.users);

	app.use("/messages", router.messages);

	app.use("*", (req, res, next) =>
		res.send(
			"<h1>Something went wrong. Try again. Invalid database route </h1>"
		)
	);
};

const express = require('express');
const PORT = require('./config').PORT;

const main = () => {
	const app = express();

	/*
        Middleware Configuration
    */

	/*
        Route Configuration
    */

	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
};

main();

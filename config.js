const config = require('./config/config.json');

let PORT;

if (config.ENV === 'local') {
	PORT = 3000;
}

module.exports = {
	PORT,
};

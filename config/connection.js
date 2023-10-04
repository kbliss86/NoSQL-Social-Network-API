const {connect, connection} = require('mongoose');

connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api');

module.exports = connection;
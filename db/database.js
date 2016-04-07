// This connects us to our database

var mongoose = require('mongoose');

var connectionString = process.env.DB;

console.log('Attempting to connect to MongoDB');
mongoose.connect(connectionString); // connects to DB supplied in above variable

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + process.env.DB);
});

mongoose.connection.on('error',function (error) {
  console.log('Mongoose connection error: ' + error);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected!');
});

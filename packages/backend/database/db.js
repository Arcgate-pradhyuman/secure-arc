const mongoose = require('mongoose');

const url = process.env.MONGO_CONNECTION_URL;

// Setting mongoose options
const mongooseOptions = {
  useNewUrlParser: true, // Use new URL parser to avoid deprecation warnings
  useUnifiedTopology: true, // Use new topology engine
  serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds for selecting server
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4 (change to 6 to use IPv6)
};

mongoose.connect(url, mongooseOptions);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('DB connected');
});

db.on('error', (err) => {
  console.error(`DB connection error: ${err}`);
});

db.on('disconnected', () => {
  console.error('DB disconnected');
  // Optionally, try to reconnect here
});

if (process.env.NODE_ENV === 'DEV') {
  // Enable Mongoose debugging
  mongoose.set('debug', true);
}

module.exports = db;

const mongoose = require("mongoose");
const url = process.env.MONGO_CONNECTION_URL;

mongoose.connect(url);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("db is connected");
});
db.on("error", (err) => {
  console.log(`db is not connected error : ${err}`);
});

module.exports = db;

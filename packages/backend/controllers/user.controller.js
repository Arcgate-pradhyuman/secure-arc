const { default: mongoose } = require("mongoose");
const db = require("../database/db");

const createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userExists = await db
      .collection("users")
      .findOne({ username: username });
    if (userExists) {
      return res.status(200).json({ message: "username already exists" });
    }
    await db.collection("users").insertOne({
      username: username,
      password: password,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return res.status(200).json({ message: "user is created" });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const validUserId = new mongoose.Types.ObjectId(userId);
    const user = await db.collection("users").findOne({ _id: validUserId });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ message: "success", data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getUser };
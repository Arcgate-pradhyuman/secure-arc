const { default: mongoose } = require('mongoose');
const db = require('../database/db');
const {
  hash: { hashPassword, verifyPassword },
} = require('arc-encrypt');

const createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const userExists = await db
      .collection('users')
      .findOne({ username: username });
    if (userExists) {
      return res.status(409).json({ message: 'username already exists' });
    }
    await db.collection('users').insertOne({
      username: username,
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return res.status(200).json({ message: 'user is created' });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const validUserId = new mongoose.Types.ObjectId(_id);
    const user = await db.collection('users').findOne({ _id: validUserId });
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }
    return res.status(200).json({ message: 'success', data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getUser };

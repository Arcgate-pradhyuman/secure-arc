const {
  jwt: { generateToken, verifyToken },
} = require('arc-encrypt');
const db = require('../database/db');
const mongoose = require('mongoose');

const validateJWT = async (req, res, next) => {
  try {
    const authHeader =
      req.headers['authorization'] || req.headers['Authorization'];
    if (!authHeader) {
      return res.status(400).send({
        message: 'Enter the token',
      });
    }
    const token = authHeader.split(' ')[1];
    const decodedToken = verifyToken(token);
    if (!decodedToken) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    const user = await db
      .collection('users')
      .findOne({ _id: new mongoose.Types.ObjectId(decodedToken.userId) });
    if (!user) {
      return res
        .status(404)
        .json({ message: 'user not found with this token' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(`Error while authorization error : ${error.message}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { validateJWT };

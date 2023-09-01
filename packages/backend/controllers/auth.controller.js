const db = require('../database/db');
const {
  jwt: { generateToken, verifyToken },
  hash: { hashPassword, verifyPassword },
} = require('arc-encrypt');

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db.collection('users').findOne({ username: username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }
    const chkPassword = await verifyPassword(password, user.password);
    if (chkPassword === false) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const accessToken = generateToken({ userId: user._id });
    const refreshToken = generateToken({ userId: user._id }, 604800); // 1 week for refresh token
    return res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

const token = (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(403).json({ message: 'Refresh token is required' });
    }

    const decodedToken = verifyToken(refreshToken);

    if (!decodedToken) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

    const newAccessToken = generateToken({ userId: decodedToken.userId });
    return res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, token };

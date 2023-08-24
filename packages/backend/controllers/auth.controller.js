const db = require("../database/db");
const {
  jwt: { generateToken, verifyToken },
} = require("arc-encrypt");

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db.collection("users").findOne({ username: username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const accessToken = generateToken({ userId: user._id });
    const refreshToken = generateToken({ userId: user._id }, 604800); // 1 week for refresh token
    return res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { login };

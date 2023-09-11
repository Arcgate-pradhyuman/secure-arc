const router = require('express').Router();
const { login, token } = require('../controllers/auth.controller');

// login
router.post('/login', login);
// token
router.post('/token', token);

module.exports = router;
// const {
//     jwt: {
//         generateToken,
//         verifyToken
//     },

// } = require('arc-encrypt');

// const router = express.Router();

// // Dummy user data for simplicity
// const users = {
//     alice: { password: 'password123', userId: 1 },
//     bob: { password: 'mypassword', userId: 2 }
// };

// router.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     const user = users[username];

//     if (!user || user.password !== password) {
//         return res.status(401).json({ message: 'Invalid username or password' });
//     }

//     const accessToken = generateToken({ userId: user.userId });
//     const refreshToken = generateToken({ userId: user.userId }, 604800); // 1 week for refresh token

//     return res.json({ accessToken, refreshToken });
// });

// router.post('/token', (req, res) => {
//     const { refreshToken } = req.body;

//     if (!refreshToken) {
//         return res.status(403).json({ message: 'Refresh token is required' });
//     }

//     const decodedToken = verifyToken(refreshToken);

//     if (!decodedToken) {
//         return res.status(403).json({ message: 'Invalid refresh token' });
//     }

//     const newAccessToken = generateToken({ userId: decodedToken.userId });
//     return res.json({ accessToken: newAccessToken });
// });

// module.exports = router;

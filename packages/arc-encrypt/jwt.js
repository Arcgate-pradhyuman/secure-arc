// jwt.js
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;

function generateToken(payload, expiresIn = 3600) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        console.error('Access token verification failed:', error.message);
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken
};

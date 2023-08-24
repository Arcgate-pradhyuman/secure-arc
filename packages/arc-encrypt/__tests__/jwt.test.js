// jwt.test.js
const { expect } = require('chai');
const { generateToken, verifyToken } = require('./jwt'); // Assuming both jwt.js and jwt.test.js are in the same directory

describe('JWT functions', () => {
    describe('generateToken', () => {
        it('should generate a valid token', () => {
            const payload = { userId: '123' };
            const token = generateToken(payload, 10); // 10 seconds expiration for the test

            expect(token).to.be.a('string');
        });
    });

    describe('verifyToken', () => {
        it('should verify a valid token', () => {
            const payload = { userId: '123' };
            const token = generateToken(payload, 10);

            const decodedPayload = verifyToken(token);
            expect(decodedPayload.userId).to.equal('123');
        });

        it('should return null for an invalid token', () => {
            const invalidToken = 'invalid.token.here';

            const decodedPayload = verifyToken(invalidToken);
            expect(decodedPayload).to.be.null;
        });

        it('should return null for an expired token', (done) => {
            const payload = { userId: '123' };
            const token = generateToken(payload, 1); // 1 second expiration for the test

            // Wait for the token to expire
            setTimeout(() => {
                const decodedPayload = verifyToken(token);
                expect(decodedPayload).to.be.null;
                done();
            }, 1100); // Waiting a bit more than the token's lifespan to ensure it's expired
        });
    });
});


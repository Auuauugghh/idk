const crypto = require('crypto');

class AuthManager {
    constructor() {
        this.users = {};
        this.tokens = {};
    }

    generateToken(userId) {
        const token = crypto.randomBytes(16).toString('hex');
        this.tokens[token] = userId;
        return token;
    }

    validateToken(token) {
        return this.tokens[token] || null;
    }

    revokeToken(token) {
        delete this.tokens[token];
    }

    createUser(username, password) {
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        this.users[username] = hashedPassword;
    }

    authenticateUser(username, password) {
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        return this.users[username] === hashedPassword;
    }
}

module.exports = AuthManager;
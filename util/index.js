const crypto = require('crypto');
const config = require('../config/index');
const jwt = require('jsonwentoken');
module.exports = {
    createHash: (value) => {
        const hmac = crypto.createHash('sha256', config.secret);
        hmac.update(value);
        return hmac.digest('hex');
    },
    verify(result) {
        return jwt({
            name: result.name,
            _id: result._id
        }, config.secret, { expiresIn: '2h' })
    }
}
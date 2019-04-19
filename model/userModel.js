const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const userSchema = new Schema({
    _id: {
        type: ObjectId
    },
    name: {
        unique: true,
        type: String
    },
    phone: {
        type: String,
        default:""
    },
    email: {
        type: String,
        default:""
    },
    password: String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    lastLoginAt: {
        type: Date,
        default: Date.now()
    }
});
exports.userModel = mongoose.model('user', userSchema);
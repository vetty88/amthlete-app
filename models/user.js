const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
const UserSchema = new Schema ({
name: {
type: String,
required: true,
trim: true
},
username: {
type: String,
required: true,
},
password: {
type: String,
required: true,
},
});
const User = mongoose.model('user', UserSchema);
module.exports = User;
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true
  }
});

var User = mongoose.model('User', userSchema);
module.exports = User;
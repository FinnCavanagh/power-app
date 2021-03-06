var mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({ 
  username: { type: String },
  fullname: { type: String },
  phone_number: { type: String },
  image: { type: String },
  twitter_handle: { type: String },
  contacts: [{ type: mongoose.Schema.ObjectId, ref: 'Recipient' }],
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("User", userSchema);


// A model notifies its associated views and controllers when there has been a change in its state. 
// This notification allows the views to produce updated output, 
// and the controllers to change the available set of commands. 
// A passive implementation of MVC omits these notifications, because the application does not require them or the software platform does not support them. 

// model classes encapsulate your application’s data and provide an API to access and manipulate that data.


var mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({ 
  local: {
    username: { type: String },
    fullname: { type: String },
    image: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
  }
});

userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model("User", userSchema);
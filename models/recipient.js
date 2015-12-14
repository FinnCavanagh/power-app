var mongoose = require("mongoose");

var recipientSchema = mongoose.Schema({ 
    name: String,
    email: String,
    phone_number: String,
    twitter_handle: String
  });





module.exports = mongoose.model("Recipient", recipientSchema);
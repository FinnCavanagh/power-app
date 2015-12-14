var mongoose = require("mongoose");

var recipientsSchema = new mongoose.Schema({ 
    email: String,
    phone_number: String,
    twitter_handle: String,
  }
});


module.exports = mongoose.model("Recipient", recipientSchema);
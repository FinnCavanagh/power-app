var mongoose = require("mongoose");

var powerboxSchema = new mongoose.Schema({ 
    text: String,
    sender: String,
    recipient: String,
    date: Date,
  }
});


module.exports = mongoose.model("Powerbox", powerboxSchema);
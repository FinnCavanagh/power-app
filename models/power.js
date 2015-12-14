
var mongoose = require("mongoose");

var powerSchema = new mongoose.Schema({ 
   tags: [ String ], 
   text: String,
   citation: String
 });


module.exports = mongoose.model("Power", powerSchema);


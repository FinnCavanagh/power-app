//this import is based on an existing database called power-test
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/power-test');




function importTags(tags){
  console.log("So far, got "+ tags.length + " tags");
}



var powerSchema = new mongoose.Schema({ 
   tags: [ String ], 
   text: String,
   citation: String
 });


var tags = [];

var Power = mongoose.model("quotes", powerSchema);

Power.find({}, function(err, powers){
  console.log("found "+ powers.length + " powers")
  powers.forEach(function(power){
    tags = tags.concat(power.tags);
  })

  mongoose.connection.close();
  importTags(tags);
})
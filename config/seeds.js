var config = require("./config");
var mongoose = require("mongoose");

mongoose.connect(config.database);

var Category = require("../models/category");
var categories = [
  "lust",
  "beauty",
  "smart",
  "wise",
  "british",
  "humor",
  "thumb",
  "towel",
  "hell",
  "mischief",
  "peeves",
  "umbridge",
]

counter = 0

Category.remove({}, function(){
  categories.forEach(function(categoryTitle, i){
    console.log("creating Category "+ categoryTitle)
    var category = new Category({name: categoryTitle});
    category.save(function(err){
      if(err) console.log(err)
      counter++
      if(counter == categories.length) process.exit()

    })
  })
})

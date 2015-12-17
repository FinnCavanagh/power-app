var config = require("./config");
var mongoose = require("mongoose");

mongoose.connect(config.database);

var Category = require("../models/category");
var categories = [
  "acceptance",
  "inspiration",
  "inspirational",
  "smart",
  "understanding",
  "wise",
  "british",
  "humor",
  "science-fiction",
  "social-commentary",
  "thumb",
  "towel",
  "simon_bolivar-s_labyrinth",
  "fred-weasley",
  "george-weasley",
  "hell",
  "mischief",
  "peeves",
  "umbridge",
  "brotherhood-of-man"
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

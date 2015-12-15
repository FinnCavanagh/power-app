var mongoose = require("mongoose");

var categorySchema = new mongoose.Schema({ 
  name: { type: String, unique: true }
});

module.exports = mongoose.model("Category", categorySchema);
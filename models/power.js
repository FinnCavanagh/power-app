// A model notifies its associated views and controllers when there has been a change in its state. 
// This notification allows the views to produce updated output, 
// and the controllers to change the available set of commands. 
// A passive implementation of MVC omits these notifications, because the application does not require them or the software platform does not support them. 

// model classes encapsulate your application’s data and provide an API to access and manipulate that data.


var mongoose = require("mongoose");

var powerSchema = mongoose.Schema({ 
   category: [String]
 });


module.exports = mongoose.model("Power", powerSchema);


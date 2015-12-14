
var Recipient = require('../models/recipient');

  function recipientsIndex(req, res){
    Recipient.find(function(err, recipients){
      if (err) return res.status(404).json({message: 'Something went wrong and we could not show the recipients.'});
      res.status(200).json({ recipients: recipients });
    });
  };

  function recipientsShow(req, res){
    Recipient.findById(req.params.id, function(err, recipient){
      if (err) return res.status(404).json({message: 'Something went wrong and we could not find the recipients.'});
      res.status(200).json({ recipient: recipient });
    });
  };

  function recipientsUpdate(req, res) {

  };

  function recipientsCreate(req, res){
    var recipient = new Recipient({
      name: req.body.name,
      email: req.body.email,
      twitter: req.body.email,
      phone_number: req.body.phone_number
    });
    console.log("req recipients",req.body.name);
    // Recipient.save(function(err){
    //   if(err) return res.render('error', {message: 'Could not add recipient ' + (err) });
    //   res.status(201).json({ recipient: recipient });
    // });
  };


  module.exports = {
    recipientsIndex:  recipientsIndex,
    recipientsShow:   recipientsShow,
    recipientsCreate: recipientsCreate,
    recipientsUpdate: recipientsUpdate
  }
 
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


  function recipientsCreate(request, response) {
    console.log('in POST');
    console.log('body:',request.body);

    var recipient = new Recipient(request.body);

    recipient.save(function(error) {
      if(error) response.json({messsage: 'Could not ceate recipient b/c:' + error});

      response.json({recipient: recipient});
    });
  }




  module.exports = {
    recipientsIndex:  recipientsIndex,
    recipientsShow:   recipientsShow,
    recipientsCreate: recipientsCreate
  }
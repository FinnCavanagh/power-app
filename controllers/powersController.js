var Power   = require('../models/power');

var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var twilioNumber = process.env.TWILIO_NUMBER;

function powersIndex(req, res) {
  Power.find(function(err, powers){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json(powers);
  });
}


function powersShow(req, res){
  Power.findById(req.params.id, function(err, power){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json(powers);
  });
}


function getRandomByTag(req, res){
  console.log(req.params);
  Power.find({ tags: req.params.tag }, function(err, powers){
    console.log(powers)
    if (err) return res.status(404).json({message: 'Something went wrong.'});

    var randomIndex = Math.floor(Math.random() * powers.length);

    res.status(200).json(powers[randomIndex]);
  });
}

function sendSms(req, res) {

  console.log(req.body);
  // { text: 'aasfasdf',
  //   citation: 'asfa',
  //   phone_number: 'sdfasdfasdf' }


  twilio.messages.create({
    body: req.body.text + "by "+ req.body.citation,
    to: req.body.phone_number,
    from: twilioNumber
  }, function(err) {
    console.log(err);
    if(err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Message sent" });
  })
}



function savePowers(req, res){
  console.log(req.body.tag);
  var power = new Power({
    tag: req.body.tag,
    text: req.body.text
  });
  power.save(function(err){
    if(err) return res.render('error', {message: 'Could not write power ' + (err) });
    res.status(201).json({ power: power });
  });
}

// function powersUpdate(req, res){
//   Power.findById(req.params.id,  function(err, power) {
//     if (err) return res.status(500).json({message: "Something went wrong!"});
//     if (!Power) return res.status(404).json({message: 'No Power found.'});

//     if (req.body.email) Power.local.email = req.body.name;
//     if (req.body.password) Power.local.password = req.body.password;

//     Power.save(function(err) {
//      if (err) return res.status(500).json({message: "Something went wrong!"});

//       res.status(201).json({message: 'Power successfully updated.', power: power});
//     });
//   });
// }

// function powersDelete(req, res){
//   Power.findByIdAndRemove({_id: req.params.id}, function(err){
//    if (err) return res.status(404).json({message: 'Something went wrong.'});
//    res.status(200).json({message: 'Power has been successfully deleted'});
//   });
// }

module.exports = {
  powersIndex:  powersIndex,
  powersShow:   powersShow,
  getRandomByTag: getRandomByTag,
  sendSms: sendSms,
  savePowers: savePowers
 
}
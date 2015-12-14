var Power   = require('../models/power');

function powersIndex(req, res) {
  Power.find(function(err, powers){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({ powers: powers });
  });
}


function powersShow(req, res){
  Power.findById(req.params.id, function(err, power){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({ powers: powers });
  });
}


function getRandomByTag(req, res){
  console.log(req.params);
  Power.find({ tags: req.params.tag }, function(err, powers){
    if (err) return res.status(404).json({message: 'Something went wrong.'});

    var randomIndex = Math.floor(Math.random() * powers.length);

    res.status(200).json({ power: powers[randomIndex] });
  });
}


// function powersCreate(req, res){
//   var power = new Power({
//     category: req.body.category,
//     content: req.body.content
//   });
//   power.save(function(err){
//     if(err) return res.render('error', {message: 'Could not write power ' + (err) });
//     res.status(201).json({ power: power });
//   });
// }

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
  getRandomByTag: getRandomByTag
  // powersCreate: powersCreate
  // powersUpdate: powersUpdate,
  // powersDelete: powersDelete
}
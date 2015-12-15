
var Category = require('../models/category');

  function categoriesIndex(req, res){
    Category.find(function(err, categories){
      if (err) return res.status(404).json({message: 'Something went wrong and we could not show the categories.'});
      res.status(200).json({ categories: categories });
    });
  };

  function categoriesShow(req, res){
    Category.findById(req.params.id, function(err, category){
      if (err) return res.status(404).json({message: 'Something went wrong and we could not find the categories.'});
      res.status(200).json({ category: categories });
    });
  };



  module.exports = {
    categoriesIndex:  categoriesIndex,
    categoriesShow:   categoriesShow,
  }
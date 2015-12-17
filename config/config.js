module.exports = {
  'secret': 'jsonwebtokensaregreat',
  'database': process.env.MONGOLAB_URI || 'mongodb://localhost:27017/power',
  'port': process.env.PORT || 3000
};
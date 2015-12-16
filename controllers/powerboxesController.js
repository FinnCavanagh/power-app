var Powerbox = ('../models/powerbox');

this.addPower = function() {
  if (self.power._id) {
    Power.update({ id: self.power._id }, self.power, function(){
      self.power = {};
    });
  } else {
    Power.save(self.power, function(power) {
      self.powers.push(power);
      self.power = {}
    });
  }
}

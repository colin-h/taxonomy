var Bee = function() {

  //call the super constructor (Grub)
  // first argument to .call is what you want this to point to
  Grub.call(this, arguments);

  this.age = 5;
  this.color = 'yellow';
  this.job = "keep on growing";

};

// Make Bee prototype point to Grub's

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
// Bee.prototype = inherit(Grub.prototype);


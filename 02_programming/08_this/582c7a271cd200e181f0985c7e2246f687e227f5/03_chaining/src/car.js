// Complete and add needed car properties:
const car = {
  vitesse: 0,
  kmheurespeed: 0,
  minutes: 0,
  start: function () {
    //  return this.car.speed;
  },
  changeSpeed: function (speed) {
    //this.vitesse = car.changeSpeed(speed);
    console.log("vitesse"((this.vitesse = `${speed}`)));
    // return (this.vitesse = `${speed}`);
    return this;
  },
  drive: function (minutes) {
    //console.log("minutes"((this.vitesse = `${minutes}`)));
    console.log(""((this.vitesse = `${minutes}` + 100)));
    console.log(`hello ${minutes}!`);
    return this;
  },
  showDistance: function () {
    console.log((this.kmheurespeed = this.vitesse + this.minutes));
    // console.log(`hello ${""}!`);
    return this;
  },
};

console.log(car.changeSpeed(130).drive(40).showDistance());
//console.log(car.speed);
//console.log((car.kmheurespeed = 130));
//console.log(car.start());
//console.log(car.start().changeSpeed(130).drive(42).showDistance());
//car.start().changeSpeed(130).drive(42).showDistance();

//console.log(car.start()); //.changeSpeed(130).drive(42).showDistance());

module.exports = car;

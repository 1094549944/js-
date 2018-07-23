/*
 * @Author: jiaxinying 
 * @Date: 2018-07-06 15:05:34 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-07-09 19:39:36
 */
var Vehicle = function () {
  this.door = 4;
}
Vehicle.prototype = {
  getName: function () {
    return 'Vehicle'
  },
  getInfo: function () {
    return [
      this.getName(), 'has', this.door, 'doors'
    ].join(' ')
  }
}
var vehicle1 = new Vehicle();

console.log(vehicle1.getInfo())

//es5

var Car = function () {
  this.door = 2
}

Car.prototype = Vehicle.prototype

Car.prototype.getName = function () {
  return 'Car'
}

var car1 = new Car()
console.log(car1.getInfo())


var interator = items => next => item => { name: item }
console.log(interator)


// var a = Object.create(b)
// console.log(a)